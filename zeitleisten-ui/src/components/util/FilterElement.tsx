import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { getAllActivities } from '../../services/ActivityService';
import { colours } from '../../style/colours';


function FilterElement() {
  const [filter, setFilter] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);;

  const handleSearch = async (searchTerm: string) => {
    setFilter(searchTerm);

    const allActivities = await getAllActivities();
    const results: any[] = allActivities.filter(activity =>
      Object.values(activity).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  };
  console.log(searchResults);

  return (
    <Input
      _hover={{ backgroundColor: colours.primary }}
      borderColor={colours.secondary}
      focusBorderColor={colours.seasalt}
      bgColor={colours.secondary}
      color={colours.seasalt}
      variant='outline'
      placeholder='Search'
      w='25%'
      marginLeft='2.5%'
      type="text"
      value={filter}
      onChange={(e) => handleSearch(e.target.value)} />
  );
}

export default FilterElement;