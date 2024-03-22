import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerFooter,
  useDisclosure, IconButton, Box, FormLabel, Stack,
} from '@chakra-ui/react'
import { colours } from '../../style/colours'
import { IFilterProps } from '../../dtos/IProperties'
import { filterActivities } from './generalFunctions'
import { getSatelliteDataBySearchResult } from './Selection'
import { MenuButton, MenuInput } from '../../style/StyledComponents'

const MenuDrawer: React.FC<IFilterProps> = ({ setFilter, filter, viewOption, setGroups, setItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSearch = async (searchTerm: string) => {
    setFilter(searchTerm);
    const results = await filterActivities(searchTerm)
    const dataBySearchResult = await getSatelliteDataBySearchResult(results, viewOption, true, true);
    setGroups(dataBySearchResult.groups)
    setItems(dataBySearchResult.items)
  };

  return (
    <>
      <IconButton variant={'ghost'} aria-label='Open Menu' size='lg' onClick={onOpen} icon={<HamburgerIcon boxSize={8} color={'seasalt'} />} _hover={{ bg: 'black' }} marginLeft='3.5%' />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'> Welcome to SATLINE</DrawerHeader>
          <DrawerBody>
            <Stack spacing='10%'>
              <Box>
                <FormLabel>Find by</FormLabel>
                <MenuInput
                  focusBorderColor={colours.silverblue}
                  id='filterProperty'
                  placeholder='Satellite ID / Order ID / Activity ID'
                  value={filter}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <MenuButton width='50%' leftIcon={<SettingsIcon />} >Settings</MenuButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default MenuDrawer