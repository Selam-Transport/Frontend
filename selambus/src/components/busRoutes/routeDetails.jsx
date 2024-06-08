import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Container,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import Bsquare from '../../assets/Bsquare.jpeg';

const RouteDetails = () => {
  const { routeId } = useParams();
  const routeData = {
    'addis-ababa-hawassa': {
      from: 'Addis Ababa',
      to: 'Hawassa',
      date: '2024-06-10',
      busNumber: 'A123',
      busImage: 'bus_image_url',
      driverLicense: 'DL123456',
    },
    'addis-ababa-bahir-dar': {
      from: 'Addis Ababa',
      to: 'Bahir Dar',
      date: '2024-06-11',
      busNumber: 'B456',
      busImage: 'bus_image_url',
      driverLicense: 'DL789012',
    },
    'addis-ababa-gondar': {
      from: 'Addis Ababa',
      to: 'Gondar',
      date: '2024-06-12',
      busNumber: 'C789',
      busImage: 'bus_image_url',
      driverLicense: 'DL345678',
    },
    'addis-ababa-mekelle': {
      from: 'Addis Ababa',
      to: 'Mekelle',
      date: '2024-06-13',
      busNumber: 'D012',
      busImage: 'bus_image_url',
      driverLicense: 'DL901234',
    },
    'addis-ababa-dire-dawa': {
      from: 'Addis Ababa',
      to: 'Dire Dawa',
      date: '2024-06-14',
      busNumber: 'E345',
      busImage: 'bus_image_url',
      driverLicense: 'DL567890',
    },
    'addis-ababa-harar': {
      from: 'Addis Ababa',
      to: 'Harar',
      date: '2024-06-15',
      busNumber: 'F678',
      busImage: 'bus_image_url',
      driverLicense: 'DL123890',
    },
    'addis-ababa-lalibela': {
      from: 'Addis Ababa',
      to: 'Lalibela',
      date: '2024-06-16',
      busNumber: 'G901',
      busImage: 'bus_image_url',
      driverLicense: 'DL234567',
    },
    'addis-ababa-axum': {
      from: 'Addis Ababa',
      to: 'Axum',
      date: '2024-06-17',
      busNumber: 'H234',
      busImage: 'bus_image_url',
      driverLicense: 'DL345678',
    },
    'addis-ababa-jimma': {
      from: 'Addis Ababa',
      to: 'Jimma',
      date: '2024-06-18',
      busNumber: 'I567',
      busImage: 'bus_image_url',
      driverLicense: 'DL456789',
    },
    'addis-ababa-arba-minch': {
      from: 'Addis Ababa',
      to: 'Arba Minch',
      date: '2024-06-19',
      busNumber: 'J890',
      busImage: 'bus_image_url',
      driverLicense: 'DL567890',
    },
  };
  

  const route = routeData[routeId];

  if (!route) {
    return <Text>Route not found</Text>;
  }

  return (
    <Container maxW='container.lg' mt='40px' textAlign='center' alignContent="center" bgColor='gray.300' my="130px">
      <Stack
        spacing={8}
        p={8}
        boxShadow='md'
        borderWidth='1px'
        borderRadius='lg'
        bg='white'
      >
        <Heading size='lg'>{route.from} to {route.to}</Heading>
        <Image 
           w='40%'
           h='85%'
           borderRadius='30'
           src={Bsquare} 
            alt={`${route.from} to ${route.to}`} 
            mx='auto'

            />
        <Box>
          <Text fontWeight='bold'>Date:</Text>
          <Text>{route.date}</Text>
        </Box>
        <Box>
          <Text fontWeight='bold'>Bus Number:</Text>
          <Text>{route.busNumber}</Text>
        </Box>
        <Box>
          <Text fontWeight='bold'>Driver's License:</Text>
          <Text>{route.driverLicense}</Text>
        </Box>
        <Button colorScheme='blue' w='50%' mx='auto'>Book Ticket</Button>
      </Stack>
    </Container>
  );
};

export default RouteDetails;
