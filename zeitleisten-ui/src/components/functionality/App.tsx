
import { Box, Center, Stack } from '@chakra-ui/react'
import SatelliteTimeline from './SatelliteTimeline'
import "../../style/App.css";
import MenuDrawer from '../util/MenuDrawer';
import TitlepageBar from '../util/TitlepageBar';
import ViewSelection from './ViewSelection';
import { useEffect, useState } from 'react';
import getSatelliteData from '../util/Selection';
import { BY_SATELLITE } from '../../util/Constants';
import FilterElement from '../util/FilterElement';
import { colours } from '../../style/colours';
import ActivitySelection from './ActivitySelection';


function App() {

  const [groups, setGroups] = useState<ISatelliteTimelineProps['groups']>([]);
  const [items, setItems] = useState<ISatelliteTimelineProps['items']>([]);
  const [showAcquisitions, setShowAcquisitions] = useState(true);
  const [showSlews, setShowSlews] = useState(true);
  const [viewOption, setViewOption] = useState(BY_SATELLITE);

  useEffect(() => {
    getSatelliteData(viewOption, showAcquisitions, showSlews).then(({ groups, items }) => {
      setGroups(groups);
      setItems(items);
    });
  }, [viewOption, showAcquisitions, showSlews]);

  return (
    <div className='App'>
      <Box bgColor={colours.secondary} color={colours.seasalt} p='1%' w='100%' h='45%' >
        <Stack spacing='1%' direction='row' align='center' marginLeft='2.5%' w='100%' h='100%'>
          <TitlepageBar />
          <FilterElement />
          <ViewSelection setGroups={setGroups} setItems={setItems} setViewOption={setViewOption} showAcquisitions={showAcquisitions} showSlews={showSlews} />
          <Box width="50%" marginEnd='4%' alignItems={'flex-end'}>
            <ActivitySelection setShowAcquisitions={setShowAcquisitions} setShowSlews={setShowSlews} showAcquisitions={showAcquisitions} showSlews={showSlews} />
          </Box>
        </Stack>
      </Box>
      <Center w='100%' h='50%' bg={colours.secondary} color={colours.seasalt} opacity='50%' alignItems={'center'} justifyContent={'flex-start'}>
        <MenuDrawer />
      </Center>
      <SatelliteTimeline groups={groups} items={items} />
    </div>
  );
};

export default App
