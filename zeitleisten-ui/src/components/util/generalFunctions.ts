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
  const results: IMinimalActivity[] = allActivities.filter(activity =>
    Object.values(activity).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return results;
}