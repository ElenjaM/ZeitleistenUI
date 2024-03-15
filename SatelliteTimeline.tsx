import Timeline, { TimelineItemBase } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import React  from 'react';
import { getAllActivities } from '../services/ActivityService';


const SatelliteTimeline: React.FC = () => {

  const {groups, items} = pasteData();
    // Map each group to a timeline group


return (
    <Timeline
    timeSteps={{ second: 1, minute: 1, hour: 1, day: 1, month: 1, year: 1 }}
      groups={groups}
      items={items}
      //handle overlapping
      stackItems
      defaultTimeStart={moment().add(0, 'hour')}
      defaultTimeEnd={moment().add(3, 'hour')}
    />
  );
};

export default SatelliteTimeline;

function pasteData() 
{
  const allActivities : IMinimalActivity[] = [];
  const allActivitiesPromise = getAllActivities();

  allActivitiesPromise.then((response) => {
    // Hier hast du Zugriff auf alle Daten
    response.forEach((activity) => {
      allActivities.push(activity);
    });
  });  const uniqueSatelliteIds = [...new Set(allActivities.map(activity => activity.SatelliteId))];
  let groups: { id: number; title: string; bgColor: { luminosity: string; seed: number; format: string; alpha: number; }; }[] = [];
  
  uniqueSatelliteIds.forEach((satelliteId, index) => {
    groups.push({
      id: index + 1,
      title: satelliteId + "",
      bgColor: { luminosity: "light", seed: index, format: "rgba", alpha: 0.6 },
    });
  });

  let items = [];
  for (let i = 0; i < allActivities.length; i++) 
  {
    items.push({
      id: i,
      group: allActivities[i].SatelliteId + "",
      title: allActivities[i].ActivityType,
      start: allActivities[i].StartDate,
      end: allActivities[i].EndDate,
      canMove: false,
      canResize: false,
      canChangeGroup: false
    });
  }
  return { groups, items };
}

