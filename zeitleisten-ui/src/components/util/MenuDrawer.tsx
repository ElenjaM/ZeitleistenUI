import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Input,
  Box,
  FormLabel,
  Stack,
  Button,
  DrawerFooter
} from '@chakra-ui/react'
import { colours } from '../../style/colours'

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <IconButton variant={'ghost'} aria-label='Open Menu' size='lg' onClick={onOpen} icon={<HamburgerIcon boxSize={8} color={'seasalt'} />} _hover={{ bg: 'black' }} marginLeft='3.5%' />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'> Welcome to SATLINE</DrawerHeader>
          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel>Find by</FormLabel>
                <Input
                  focusBorderColor={colours.silverblue}
                  borderWidth={2}
                  color={colours.secondary}
                  id='filterProperty'
                  placeholder='Satellite ID / Order ID / Activity ID'
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button width='50%' leftIcon={<SettingsIcon />} bgColor={colours.sand} >Settings</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default MenuDrawer