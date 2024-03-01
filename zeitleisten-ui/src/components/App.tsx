
import { Center, Square, Circle } from '@chakra-ui/react'

import SatelliteTimeline from './SatelliteTimeline'


function App () {
  return (
    <div>
    <Center bg='gray.900' h='100px' color='white'>
      Welcome to my App!
    </Center>       
    <SatelliteTimeline />
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
