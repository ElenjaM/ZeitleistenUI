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