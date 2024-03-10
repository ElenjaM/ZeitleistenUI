import axios from "axios";
import { BACKEND_ADDRESS } from "../util/Constants";

const ROUTE = "/Activity/";

//fetch all activities from backend project 
export async function getAllActivities() : Promise<IMinimalActivity[]> 
{
    const response = await axios.get(BACKEND_ADDRESS + ROUTE + "All");
    return await response.data;
}

//fetch particular activity from backend project 
export async function getActivity(Id:Number) : Promise<IActivity> 
{
    const response = await axios.get(BACKEND_ADDRESS + ROUTE + Id);
    return await response.data;
}

//fetch all activities of a particular satellite from backend project 
export async function getActivitiesOfSatelliteId(SatelliteId:String) : Promise<IMinimalActivity[]> 
{
    const response = await axios.get(BACKEND_ADDRESS + ROUTE + "GetBySatId" + SatelliteId);
    return await response.data;
}

//fetch all activities of an particular order from backend project 
export async function getActivitiesOfOrderId(OrderId:Number) : Promise<IMinimalActivity[]> 
{
    const response = await axios.get(BACKEND_ADDRESS + ROUTE + "GetByOrderId" + OrderId);
    return await response.data;
}

