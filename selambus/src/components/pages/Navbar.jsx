import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Wrap,
  WrapItem,
  Avatar,
  Link,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdTravelExplore } from "react-icons/md";
import { FaBus, FaSearchDollar } from "react-icons/fa";
import { IoIosLogIn, IoMdNotifications } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import React, { Profiler } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const Navbar = () => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const firstField = React.useRef();

  return (
    <>
      <div className= 'bg-green-700 flex flex-row-reverse h-[6em] shadow hover:shadow-lg mr-5 w-[100%] fixed top-0 left-0 right-0 z-50'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='px-10 bg-green-700 text-white'>
              <Link href='/' className='font-bold hover:text-green-700'>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='px-10 bg-green-700 text-white'>
              <Link href='/about' className='font-bold hover:text-green-700'>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='px-10 bg-green-700 text-white'>
              <Link href='/news' className='font-bold hover:text-green-700'>
                News
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='mx-10 bg-green-700 text-white'>
              <Button colorScheme='green--------u' onClick={onDrawerOpen}>
                Book Now
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className=' bg-green-700 text-white '>
              <Button onClick={onModalOpen} bgColor='green' color='white' _hover="none" _active="none">
                <IoMdNotifications className='h-10 w-6 mx-2' />
                <Badge ml='1' colorScheme='red'>
                  NEW
                </Badge>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className='bg-green-700'>
              <Menu>
                <MenuButton bgColor='green' color='white' _hover="none" _active="none" as={Button} rightIcon={<ChevronDownIcon />}>
                  <Flex>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                    <Box ml='3'>
                      <Text>
                        Abiy Ahmed
                      </Text>
                      <Text fontSize='sm'>abiyahmed2027@gmail.com</Text>
                    </Box>
                  </Flex>
                </MenuButton>
                <MenuList className='px-4'>
                  <MenuItem><IoIosLogIn />
                    <a className='px-2' href='/login'>Login</a>
                  </MenuItem>
                  <MenuItem> <SiGnuprivacyguard />
                    <a className='px-2' href='/signup'>Signup</a>
                  </MenuItem>
                  <MenuItem><MdTravelExplore />
                    <a className='px-2' href='/profile/travel-history'> Travel History</a>
                  </MenuItem>
                  <MenuItem><FaSearchDollar />
                    <a className='px-2' href='/profile/profile-setting'>Profile Setting</a>
                  </MenuItem>
                  <MenuItem><FaBus />
                    <a className='px-2' href='#'>Register your Taxi</a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='text-white text-4xl p-10 mr-20'>
           Selam Bus Logo
         </div>
      
      </div>
     
     
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isModalOpen}
        onClose={onModalClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <p>
              You have no notifications
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Book Selam Bus Ticket
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='fname'>First Name</FormLabel>
                <Input
                  ref={firstField}
                  id='fname'
                  placeholder='Please enter first name'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='lname'>Last Name</FormLabel>
                <Input
                  ref={firstField}
                  id='lname'
                  placeholder='Please enter Last name'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='station_from'>Starting From</FormLabel>
                <Input
                  ref={firstField}
                  id='station_from'
                  placeholder='Starting Station'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='destination'>Destination</FormLabel>
                <Input
                  ref={firstField}
                  id='destination'
                  placeholder='Destination Station'
                />
              </Box>
              <Box>
              <FormLabel htmlFor='destination'>Number of Passenger(s)</FormLabel>
              <NumberInput 
                   id='destination'
                   ref={firstField}
                   defaultValue={1} 
                    min={1} 
                    max={49}>
                  <NumberInputField />
                   <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                   </NumberInputStepper>
                  </NumberInput>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onDrawerClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Reserve</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
