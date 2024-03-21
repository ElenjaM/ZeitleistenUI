import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { colours } from '../../style/colours';
import { IFilterProps } from '../../dtos/IProperties';
import { getSatelliteDataBySearchResult } from './Selection';
import { filterActivities } from './generalFunctions';


const FilterElement: React.FC<IFilterProps> = ({ setFilter, filter, viewOption, setGroups, setItems }) => {

  const handleSearch = async (searchTerm: string) => {
    setFilter(searchTerm);
    const results = await filterActivities(searchTerm)
    const dataBySearchResult = await getSatelliteDataBySearchResult(results, viewOption, true, true);
    setGroups(dataBySearchResult.groups)
    setItems(dataBySearchResult.items)
  };

  return (
    <InputGroup borderColor={colours.secondary} width='30%'>
      <Input
        marginLeft='10%'
        _hover={{ backgroundColor: colours.primary }}
        borderColor={colours.secondary}
        focusBorderColor={colours.seasalt}
        bgColor={colours.secondary}
        color={colours.seasalt}
        variant='outline'
        w='100%'
        type="text"
        value={filter}
        onChange={(e) => handleSearch(e.target.value)}
        paddingLeft="13%"
      />
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        marginLeft='12%'
      />
    </InputGroup>
  );
}

export default FilterElement;