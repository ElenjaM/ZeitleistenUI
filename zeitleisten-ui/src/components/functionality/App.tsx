
import SatelliteTimeline from './SatelliteTimeline'
import "../../style/App.css";
import MenuDrawer from '../util/MenuDrawer';
import TitlepageBar from '../util/TitlepageBar';
import ViewSelection from './ViewSelection';
import { useEffect, useState } from 'react';
import getSatelliteData from '../util/Selection';
import { BY_SATELLITE } from '../../util/Constants';
import FilterElement from '../util/FilterElement';
import ActivitySelection from './ActivitySelection';
import { ISatelliteTimelineProps } from '../../dtos/IProperties';
import { AppBox, AppBox2, AppCenter, AppStack } from '../../style/StyledComponents';


function App() {

  const [groups, setGroups] = useState<ISatelliteTimelineProps['groups']>([]);
  const [items, setItems] = useState<ISatelliteTimelineProps['items']>([]);
  const [showAcquisitions, setShowAcquisitions] = useState(true);
  const [showSlews, setShowSlews] = useState(true);
  const [viewOption, setViewOption] = useState(BY_SATELLITE);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    getSatelliteData(viewOption, showAcquisitions, showSlews).then(({ groups, items }) => {
      setGroups(groups);
      setItems(items);
    });
  }, [viewOption, showAcquisitions, showSlews]);

  return (
    <div className='App'>
      <AppBox >
        <AppStack spacing='1%' direction='row' align='center'>
          <TitlepageBar />
          <FilterElement setFilter={setFilter} filter={filter} viewOption={viewOption} setGroups={setGroups} setItems={setItems} />
          <ViewSelection setGroups={setGroups} setItems={setItems} setViewOption={setViewOption} showAcquisitions={showAcquisitions} showSlews={showSlews} />
          <AppBox2 marginEnd='4%'>
            <ActivitySelection setShowAcquisitions={setShowAcquisitions} setShowSlews={setShowSlews} showAcquisitions={showAcquisitions} showSlews={showSlews} />
          </AppBox2>
        </AppStack>
      </AppBox>
      <AppCenter >
        <MenuDrawer setFilter={setFilter} filter={filter} viewOption={viewOption} setGroups={setGroups} setItems={setItems} />
      </AppCenter>
      <SatelliteTimeline groups={groups} items={items} />
    </div>
  );
};

export default App
