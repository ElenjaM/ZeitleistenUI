
import { Center } from '@chakra-ui/react'
import SatelliteTimeline from './SatelliteTimeline'
import "../../style/App.css";
import MenuDrawer from '../util/MenuDrawer';
import TitlepageBar from '../util/TitlepageBar';

function App () 
{
  return (
    <div className='App'>
    <TitlepageBar />
    <Center w='100%' h='50%' bg='secondary' p='1%' color='white' opacity='50%' alignItems={'center'} justifyContent={'flex-start'}>
      <MenuDrawer /> 
    </Center>
    <SatelliteTimeline />
    </div>       
  );
};

export default App
