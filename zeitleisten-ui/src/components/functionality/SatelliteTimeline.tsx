import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import React,  { useEffect, useState }  from 'react';
import { getAllActivities } from '../../services/ActivityService';
import { groupBy } from 'lodash';
import { colours } from '../../style/colours';

const SatelliteTimeline: React.FC = () => {
const [groups, setGroups] = useState<{ id: string; title: string; }[]>([]);
const [items, setItems] = useState<{ id: number; group: string; title: string; start_time: moment.Moment; end_time: moment.Moment; }[]>([]);

async function getSatelliteData() 
{
  //const allActivities : IMinimalActivity[] = [];
  const allActivities = await getAllActivities();

 /* allActivitiesPromise.then((response) => {
    // Hier hast du Zugriff auf alle Daten
    response.forEach((activity) => {
      allActivities.push(activity);
    });
  }); */
  const activitiesBySatelliteId = groupBy(allActivities, 'satelliteId');
  console.log(activitiesBySatelliteId);

  // Map each group to a timeline group
  const groups = Object.keys(activitiesBySatelliteId).map(satelliteId => (
    {
        id: satelliteId,
        title: `${satelliteId}`,
    }));
  console.log(groups);

  // Map each activity within a group to a timeline item
  const items = [];
  for (const satelliteId in activitiesBySatelliteId) {
    for (const activity of activitiesBySatelliteId[satelliteId]) {
      items.push({
        id: activity.id,
        group: activity.satelliteId,
        title: fetchTitle(activity.activityType),
        start_time: moment(activity.startDate),
        end_time: moment(activity.endDate),
        itemProps: 
        {
          style: 
          {
            backgroundColor: fetchColor(activity.activityType),
            borderColor: fetchColor(activity.activityType)
          },
        }
      });
    }
  }
  console.log(items[0].start_time.toString());

  setGroups(groups);
  setItems(items);
}

useEffect(() => 
{
  getSatelliteData();
}, []);

return (
  <Timeline
    timeSteps={{ second: 1, minute: 1, hour: 1, day: 1, month: 1, year: 1 }}
    // Rendering of the Row Labels
    groups={groups}
    groupRenderer={({ group }) => {
      return (
        <div
          style={{
            color: colours.secondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          {group.title}
        </div>
      );
    }}
    //Rendering of the items on the several timelines 
    items={items}
    //handle overlapping
    stackItems
    defaultTimeStart={moment('2023-05-01:04:00:00')}
    defaultTimeEnd={moment('2023-05-01:04:59:00')}
    minZoom={60*1000} // 1 minute
    maxZoom={60*60*1000} // 1 hour
    itemHeightRatio={0.75}
    lineHeight={40}  
    itemRenderer={({ item, itemContext, getItemProps}) => {
      const { selected } = itemContext;
      const backgroundColor = selected ? colours.primary : fetchColor(item.title);
      const borderColor = selected ? colours.primary : fetchColor(item.title);
      return (
        <div
          {...getItemProps({
            style: {
              backgroundColor,
              color: 'white',
              borderColor,
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 4,
              borderLeftWidth: selected ? 3 : 1,
              borderRightWidth: selected ? 3 : 1,
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            },
          })}
        >
          {itemContext.title}
        </div>
      );
    }}  
    />
    );
};
export default SatelliteTimeline;

function fetchTitle(activityType: string) 
{
  switch (activityType) 
  { 
    case 'SlewActivity': 
      return 'Slew';
    case 'AcquisitionActivity':
      return 'AC';  
  }
  return 'Unknown';
}


function fetchColor(activityType: string) 
{
  switch (activityType) 
  {
    case 'Slew': 
      return colours.silverblue;
    case 'AC':
      return colours.rosered;  
  }
  return 'Unknown';
}

