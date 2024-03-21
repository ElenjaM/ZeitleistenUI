interface ISelectionProps {
    setGroups: React.Dispatch<React.SetStateAction<ISatelliteTimelineProps['groups']>>;
    setItems: React.Dispatch<React.SetStateAction<ISatelliteTimelineProps['items']>>;
    setViewOption: React.Dispatch<React.SetStateAction<string>>;
    showAcquisitions: boolean;
    showSlews: boolean;
}
export type { ISelectionProps };

interface IActivitySelectionProps {
    setShowAcquisitions: React.Dispatch<React.SetStateAction<boolean>>;
    setShowSlews: React.Dispatch<React.SetStateAction<boolean>>;
    showAcquisitions: boolean;
    showSlews: boolean;
}
export type { IActivitySelectionProps };

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
export type { ISatelliteTimelineProps };

interface IFilterProps {
    setGroups: React.Dispatch<React.SetStateAction<ISatelliteTimelineProps['groups']>>;
    setItems: React.Dispatch<React.SetStateAction<ISatelliteTimelineProps['items']>>;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    filter: string;
    viewOption: string;
}
export type { IFilterProps };