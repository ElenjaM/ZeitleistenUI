import { SearchIcon } from '@chakra-ui/icons'
import { colours } from '../../style/colours';
import { IFilterProps } from '../../dtos/IProperties';
import { getSatelliteDataBySearchResult } from './Selection';
import { filterActivities } from './generalFunctions';
import { FilterElementInput, FilterElementInputGroup, FilterElementInputLeftElement } from '../../style/StyledComponents';


const FilterElement: React.FC<IFilterProps> = ({ setFilter, filter, viewOption, setGroups, setItems }) => {

  const handleSearch = async (searchTerm: string) => {
    setFilter(searchTerm);
    const results = await filterActivities(searchTerm)
    const dataBySearchResult = await getSatelliteDataBySearchResult(results, viewOption, true, true);
    setGroups(dataBySearchResult.groups)
    setItems(dataBySearchResult.items)
  };

  return (
    <FilterElementInputGroup >
      <FilterElementInput
        _hover={{ backgroundColor: colours.primary }}
        focusBorderColor={colours.seasalt}
        type="text"
        value={filter}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <FilterElementInputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        marginLeft='12%'
      />
    </FilterElementInputGroup>
  );
}

export default FilterElement;