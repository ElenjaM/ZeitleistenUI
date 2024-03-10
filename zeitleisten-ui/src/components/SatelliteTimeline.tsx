import Timeline, { TimelineItemBase } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import React,  { useEffect, useState }  from 'react';
import { getAllActivities } from '../services/ActivityService';
import { groupBy } from 'lodash';


const SatelliteTimeline: React.FC = () => {

  const [groups, setGroups] = useState<{ id: string; title: string; }[]>([]);
  const [items, setItems] = useState<{ id: number; group: string; title: string; start_time: moment.Moment; end_time: moment.Moment; }[]>([]);

  async function getSatelliteData() {
    const response = await getAllActivities();
    const activitiesBySatelliteId = groupBy(response, 'SatelliteId');

    // Map each group to a timeline group
    const groups = Object.keys(activitiesBySatelliteId).map(satelliteId => ({
      id: satelliteId,
      title: `Satellit ${satelliteId}`
    }));

    // Map each activity within a group to a timeline item
    const items = [];
    for (const satelliteId in activitiesBySatelliteId) {
      for (const activity of activitiesBySatelliteId[satelliteId]) {
        items.push({
          id: activity.Id, // convert activity's unique id to string
          group: activity.SatelliteId,
          title: activity.ActivityType,
          start_time: moment(activity.StartDate),
          end_time: moment(activity.EndDate),
        });
      }
    }

    setGroups(groups);
    setItems(items);
  }

  useEffect(() => {
    getSatelliteData();
  }, []);

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