import { Input } from '@chakra-ui/react';
import { IFilterElementProps } from './IFilterElementProps';
import { useState } from 'react';
import { getAllActivities } from '../../../services/ActivityService';


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
        variant='outline' 
        placeholder='Search' 
        w='25%' 
        marginLeft='1.5%' 
        focusBorderColor='seasalt'
        type="text"
        value={filter}
        onChange={(e) => handleSearch(e.target.value)}/>
  );
}

export default FilterElement;