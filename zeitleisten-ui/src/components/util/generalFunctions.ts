import { getAllActivities } from "../../services/ActivityService";
import { colours } from "../../style/colours";

export function fetchTitle(activityType: string) {
  switch (activityType) {
    case 'SlewActivity':
      return 'Slew';
    case 'AcquisitionActivity':
      return 'AC';
  }
  return 'Unknown';
}

export function fetchColor(activityType: string) {
  switch (activityType) {
    case 'Slew':
      return colours.silverblue;
    case 'AC':
      return colours.rosered;
  }
  return 'Unknown';
}

export async function filterActivities(searchTerm: string) {
  const allActivities = await getAllActivities();
  const results = allActivities.filter(activity =>
    activity.id.toString() === (searchTerm.toLowerCase()) ||
    activity.satelliteId.toString().toLowerCase() === (searchTerm.toLowerCase()) ||
    activity.orderId.toString().toLowerCase() === (searchTerm.toLowerCase()) ||
    activity.activityType.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  return results;
}