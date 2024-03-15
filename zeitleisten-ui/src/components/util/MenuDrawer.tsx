import { HamburgerIcon } from '@chakra-ui/icons'
import 
{
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'

  function MenuDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton variant={'ghost'} aria-label='Open Menu' size='md' onClick={onOpen} icon={<HamburgerIcon boxSize={8} color={'white'}/>} _hover={{ bg: 'sand'}} marginLeft={10}/>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default MenuDrawer