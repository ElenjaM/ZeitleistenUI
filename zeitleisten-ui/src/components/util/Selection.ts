import { Dictionary, groupBy, isNull } from "lodash";
import { getAllActivities } from "../../services/ActivityService";
import { fetchColor, fetchTitle } from "./generalFunctions";
import moment from "moment";
import { BY_ORDER, BY_SATELLITE } from "../../util/Constants";

async function getSatelliteData(option: string, showAcquisitions: boolean, showSlews: boolean) {
    let groups: ISatelliteTimelineProps['groups'] = [];
    let items: ISatelliteTimelineProps['items'] = [];
    const allActivities = await getAllActivities();

    if ((option === BY_SATELLITE) && (!isNull(allActivities))) {
        const activitiesBySatelliteId = groupBy(allActivities, 'satelliteId');

        groups = fillGroups(activitiesBySatelliteId);
        items = fillItems(activitiesBySatelliteId, showAcquisitions, showSlews);
        // Map each activity within a group to a timeline item
    }
    else if (option === BY_ORDER && !isNull(allActivities)) {
        const activitiesByOrderId = groupBy(allActivities, 'orderId');

        groups = fillGroups(activitiesByOrderId);
        items = fillItems(activitiesByOrderId, showAcquisitions, showSlews);
    }
    else {
        groups = [];
        items = [];
        console.log('An error ocurred while fetching the data. Please try again.');
    }
    return { groups, items };
}
export default getSatelliteData;

// -------------------------- functions used in getSatelliteData --------------------------

export function fillGroups(activities: Dictionary<IMinimalActivity[]>) {
    const groups = Object.keys(activities).map(filterProperty => (
        {
            id: filterProperty,
            title: `${filterProperty}`,
        }));
    return groups;
};

export function fillItems(activities: Dictionary<IMinimalActivity[]>, showAcquisitions: boolean, showSlews: boolean = true) {
    let items: ISatelliteTimelineProps['items'] = [];
    for (const filterProperty in activities) {
        for (const activity of activities[filterProperty]) {
            if (activity.activityType === 'AcquisitionActivity' && showAcquisitions === false) {
                continue;
            }
            if (activity.activityType === 'SlewActivity' && showSlews === false) {
                continue;
            }
            items.push({
                id: activity.id,
                group: filterProperty,
                title: fetchTitle(activity.activityType),
                start_time: moment(activity.startDate),
                end_time: moment(activity.endDate),
                itemProps: {
                    style: {
                        backgroundColor: fetchColor(activity.activityType),
                        borderColor: fetchColor(activity.activityType)
                    },
                },
            });
        }
    }
    return items;
};
