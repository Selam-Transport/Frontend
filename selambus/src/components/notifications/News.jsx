import { Card, CardHeader,Image, Stack, Heading, Text, Button, CardBody, CardFooter, Box } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


export default function News() {
    return (
        
        <>
          <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  pt='130px'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

<Text noOfLines={1}>
  "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>

<Text noOfLines={[1, 2, 3]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
    </CardBody>

    <CardFooter>
   
    <Accordion allowToggle>
    <AccordionItem>
        
    <h2>
        <AccordionButton>
        <Box as='span' flex='1' textAlign='left' fontWeight='bold' >

            Read more ...
        </Box>
        <AccordionIcon />
        </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </AccordionPanel>
    </AccordionItem>
</Accordion>

    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  pt='130px'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

<Text noOfLines={1}>
  "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>

<Text noOfLines={[1, 2, 3]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
    </CardBody>

    <CardFooter>
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' fontWeight='bold' >
          Read more ...
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </CardFooter>
  </Stack>
</Card>
            
        </>
    )
}