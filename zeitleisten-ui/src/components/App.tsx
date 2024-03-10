
import { Center, Button} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import SatelliteTimeline from './SatelliteTimeline'
import "../style/App.css";
import { getAllActivities, getActivity, getActivitiesOfOrderId, getActivitiesOfSatelliteId } from '../services/ActivityService';

function App () {

    async function getAllData() {
      const response = await getAllActivities();

      console.log(response); 
    }
    async function getOneActivity() {
      const response = await getActivity(3);
      console.log(response); 
    }
    async function getAllOfSatelliteId() {
      const response = await getActivitiesOfSatelliteId("sat03");
      console.log(response); 
    }
    async function getAllOfOrderId() {
      const response = await getActivitiesOfOrderId(3354);
      console.log(response); 
    }


  return (
    <div className='App'>
      <Center bg='gray.900' h='100px' color='white' opacity='80%'>
        Welcome to my App!
      </Center>
      <div className='main'>
        <SatelliteTimeline />
        <Button margin={2} colorScheme='teal' size='sm' onClick={getAllData}> Get All Activities  </Button>
        <Button margin={2} colorScheme='blue' size='sm' onClick={getOneActivity}> Get Activity  </Button>
        <Button margin={2} colorScheme='pink' size='sm' onClick={getAllOfSatelliteId}> Get Activities of Satellite 3  </Button>
        <Button margin={2} colorScheme='purple' size='sm' onClick={getAllOfOrderId}> Get Activities of Order 3354 </Button>

      </div>
    </div>       
  );
};
/*
const App: React.FC = () => {
  return (
    <div> 
      Rendered by react!
      <SatelliteTimeline />
    </div>
  );
};
*/

export default App
