import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import React, { useEffect } from 'react';
import { colours } from '../../style/colours';
import { fetchColor } from '../util/generalFunctions';
import { ISatelliteTimelineProps } from '../../dtos/IProperties';

const SatelliteTimeline: React.FC<ISatelliteTimelineProps> = ({ groups, items }) => {

  useEffect(() => {
  }, [groups, items]);

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
      minZoom={60 * 1000} // 1 minute
      maxZoom={60 * 60 * 1000} // 1 hour
      itemHeightRatio={0.75}
      lineHeight={40}
      itemRenderer={({ item, itemContext, getItemProps }) => {
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

