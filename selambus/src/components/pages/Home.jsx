import React from 'react';
import Bsquare from "../../assets/Bsquare.jpeg";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Button,
  Text,
  Box,
  Container,
  SimpleGrid,
  Icon,
  Link as ChakraLink,
  Avatar,
} from '@chakra-ui/react';
import { FaBus, FaCheck, FaPlane,  FaShieldAlt, FaPlaneDeparture } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const safetyMeasuresAndTravelTips = [
  {
    title: 'Wear a Face Mask',
    description: 'Protect yourself and others by wearing a face mask at all times during your journey.',
    icon: FaShieldAlt,
  },
  {
    title: 'Stay Hydrated',
    description: 'Remember to stay hydrated by drinking water regularly, especially during long trips.',
    icon: FaPlaneDeparture,
  },
  // Add more safety measures and travel tips as needed
];

const CardComponent = ({ title, description, icon: Icon }) => (
  <Box
    maxW={{ base: '300px', md: 'sm' }}
    p={6}
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    boxShadow='md'
    bg='white'
  >
    <Icon color='blue.500' boxSize={8} mb={4} />
    <Text fontSize='xl' fontWeight='bold' mb={2}>{title}</Text>
    <Text>{description}</Text>
  </Box>
);


const testimonials = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    comment: "I had a great experience traveling with Selam Bus. The staff was friendly and helpful, and the bus was clean and comfortable. I would definitely recommend Selam Bus to anyone looking for a reliable and affordable travel option.",
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    comment: "The journey was smooth and enjoyable, thanks to the excellent service provided by Selam Bus. The bus was on time, and the driver was professional and courteous. I will be traveling with Selam Bus again in the future.",
  },
  {
    name: 'Michael Johnson',
    image: 'https://via.placeholder.com/150',
    comment: "I am impressed by the quality of service offered by Selam Bus. The staff was attentive to my needs, and the bus was well-maintained and comfortable. I will be recommending Selam Bus to my friends and family.",
  },
  {
    name: 'Temesgen Adamneh',
    image: 'https://via.placeholder.com/150',
    comment: "I am impressed by the quality of service offered by Selam Bus. The staff was attentive to my needs, and the bus was well-maintained and comfortable. I will be recommending Selam Bus to my friends and family.",
  },
];

const TestimonialCard = ({ name, image, comment }) => (
  <Box
    p={6}
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    boxShadow='md'
    bg='gray.100'
    color='blue.600'
  >
    <Stack spacing={4}>
      <Avatar src={testimonials.image} name={name} size='lg' />
      <Text fontSize='xl' fontWeight='bold' textAlign='center'>{name}</Text>
      <Text fontSize='xl' color='blue.600' fontStyle='italic'>{`"${comment}"`}</Text>
    </Stack>
  </Box>
);


const Home = () => {
  const routes = [
    { from: 'Addis Ababa', to: 'Hawassa', link: '/routes/addis-ababa-hawassa' },
    { from: 'Addis Ababa', to: 'Bahir Dar', link: '/routes/addis-ababa-bahir-dar' },
    { from: 'Addis Ababa', to: 'Gondar', link: '/routes/addis-ababa-gondar' },
    { from: 'Addis Ababa', to: 'Mekelle', link: '/routes/addis-ababa-mekelle' },
    { from: 'Addis Ababa', to: 'Dire Dawa', link: '/routes/addis-ababa-dire-dawa' },
    { from: 'Addis Ababa', to: 'Harar', link: '/routes/addis-ababa-harar' },
    { from: 'Addis Ababa', to: 'Lalibela', link: '/routes/addis-ababa-lalibela' },
    { from: 'Addis Ababa', to: 'Axum', link: '/routes/addis-ababa-axum' },
    { from: 'Addis Ababa', to: 'Jimma', link: '/routes/addis-ababa-jimma' },
    { from: 'Addis Ababa', to: 'Arba Minch', link: '/routes/addis-ababa-arba-minch' },
];


  return (
    <>
      <Box className='m-10 w-[95%] text-center bg-white' my='140px'>
        <Card
          direction={{ base: 'column', md: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Box flex={{ base: '1', md: '0 0 40%' }} h={{ base: '300px', md: 'auto' }}>
            <Image
              w='100%'
              h='85%'
              src={Bsquare}
              alt='Selam Bus'
              borderRadius='30'
            />
          </Box>

          <Stack flex={{ base: '1', md: '0 0 60%' }} p={6}>
            <CardBody className='rounded-md'>
              <Heading className='p-10 text-3xl md:text-6xl'>Selam Bus</Heading>
              <Text className='bold text-2xl md:text-4xl p-4'>
                Selam Bus for Peaceful Travel
              </Text>
              <Text className='text-green-600 text-3xl md:text-5xl italic'>
                ለሰላማዊ ጉዞ ሰላም ባስ ይምረጡ
              </Text>
              <Button
                className='my-10 p-4 md:p-7 hover:bg-text-blue-400 hover:cursor-pointer'
                variant='solid'
                colorScheme='blue'
              >
                Travel With Us
              </Button>
            </CardBody>
          </Stack>
        </Card>
      </Box>

      <Container as='article' maxW='container.xl' className='m-10' borderRadius='20px' bg='gray.200' my='40px' py='20px'>
        <Stack spacing={10} textAlign='center'>
          <Heading as='h1' size='xl' p='20px' color='teal.500' display='flex' alignItems='center' justifyContent='center'>
            <Icon as={FaBus} w={10} h={10} mr={3} /> Why Choose Us
          </Heading>
          <Text fontSize='xl' color='blue.600'>
            <Icon as={FaCheck} color='green.500' mr={2} /> Selam Bus is a bus company that provides a safe and comfortable
            journey to its customers. We have a team of experienced drivers who
            ensure that you reach your destination safely and on time. Our buses
            are equipped with modern amenities to make your journey enjoyable.
          </Text>
          <Text fontSize='xl' color='blue.600'>
            <Icon as={FaCheck} color='yellow.500' mr={2} /> With Selam Bus, you can expect punctuality, reliability, and a
            smooth ride. Our commitment to customer satisfaction is evident in
            the quality of our service and the positive feedback from our
            passengers. Travel with us to experience the best in class comfort
            and service.
          </Text>
          <Text fontSize='xl' color='blue.600'>
            <Icon as={FaCheck} color='green.500' mr={2} /> We also prioritize your safety with regular maintenance checks and
            adherence to safety regulations. Choose Selam Bus for a hassle-free
            and enjoyable travel experience.
          </Text>
        </Stack>
      </Container>

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign="center"
        py='20px'
      >
        Our Destination Cities
      </Text>
      <SimpleGrid
        bg='gray.50'
        columns={{ sm: 2, md: 4 }}
        spacing='8'
        p='10'
        textAlign='center'
        rounded='lg'
        color='black.400'
      >
        {routes.map((route) => (
          <ChakraLink as={Link} to={route.link} key={route.from + route.to}>
            <Box
              boxShadow='md'
              p='6'
              rounded='md'
              bg='white'
              _hover={{
                bg: 'gray.100',
                transform: 'scale(1.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            >
              <Icon as={FaPlane} w={6} h={6} mr={2} /> {route.from} - {route.to}
            </Box>
          </ChakraLink>
        ))}
      </SimpleGrid>


      <Container as='article' maxW='container.xl' className='m-10' borderRadius='20px' bg='gray.200' my='40px' py='20px'>
      <Stack spacing={8}>
        {/* Other content */}
        <Heading  bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="4xl" fontWeight="extrabold" textAlign="center" py='50px'>Special Offers</Heading>
          <Box bg='gray.100' p={4} rounded='md'>
            <Text fontSize='xl' color='blue.600'>
              <Icon as={FaCheck} color='green.500' mr={2} /> 10% discount on round-trip tickets
            </Text>
          </Box>
          <Box bg='gray.100' p={4} rounded='md'>
            <Text fontSize='xl' color='blue.600'>
              <Icon as={FaCheck} color='green.500' mr={2} /> Free Wi-Fi on all buses
            </Text>
          </Box>
          <Box bg='gray.100' p={4} rounded='md'>
            <Text fontSize='xl' color='blue.600'>
              <Icon as={FaCheck} color='green.500' mr={2} /> Complimentary snacks and drinks
            </Text>
          </Box>
          <Box bg='gray.100' p={4} rounded='md'>
            <Text fontSize='xl' color='blue.600'>
              <Icon as={FaCheck} color='green.500' mr={2} /> Special discounts for students and senior citizens
            </Text>
          </Box>
          <Box bg='gray.100' p={4} rounded='md'>
            <Text fontSize='xl' color='blue.600'>
              <Icon as={FaCheck} color='green.500' mr={2} /> Travel insurance for all passengers
            </Text>
          </Box>
      </Stack>
    </Container>


    
    
    <Container as='article' maxW='container.xl' className='m-10' borderRadius='20px' bg='gray.200' my='40px' py='20px'>
    <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="4xl" fontWeight="extrabold" textAlign="center" py='50px'>
        Safety Measures and Travel Tips
      </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}
          justifyContent='space-between'
          alignItems='center'
        >
          {safetyMeasuresAndTravelTips.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </Stack>
      </Container>

     
     
     

    <Container 
       as='article' 
       maxW='container.xl' 
       className='m-10' 
       borderRadius='20px' 
       bg='gray.200' 
       my='40px' 
       py='20px'
       >
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="4xl" fontWeight="extrabold" textAlign="center" py='50px'>
         Testimonials
      </Text>
      <Stack 
       spacing={8}
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        _hover={
          {
           
            cursor: 'pointer',
            

          }
        
       }
       >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Stack>
    </Container>
    </>
  );
};

export default Home;
