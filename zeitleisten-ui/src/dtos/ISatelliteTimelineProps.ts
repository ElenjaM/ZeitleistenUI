interface ISatelliteTimelineProps {
  groups: { id: string; title: string; }[];
  items:
  {
    id: number;
    group: string;
    title: string;
    start_time: moment.Moment;
    end_time: moment.Moment;
    itemProps?: {
      style: {
        backgroundColor: string;
        borderColor: string;
      }
    }
  }[];
}
