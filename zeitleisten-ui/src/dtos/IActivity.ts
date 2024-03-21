interface IActivity {
    Id: Number;
    Title: string;
    ActivityType: string;
    StartDate: Date;
    EndDate: Date;
    SatelliteId: string;
    MetaDataId: Number;
    MetaData: {
        Id: Number;
        SatelliteId: string;
        OrderId: Number;
    };
}