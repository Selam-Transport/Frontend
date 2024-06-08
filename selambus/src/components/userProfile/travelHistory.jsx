import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Button } from '@chakra-ui/react'

const TravelHistory = () => {
  // Sample travel history data
  const travelHistory = [
    {
      date: '2024-06-01',
      from: 'Addis Ababa',
      to: 'Hawassa',
      busNumber: 'A123',
      driver: 'John Doe',
      status: 'Completed'
    },
    {
      date: '2024-06-05',
      from: 'Addis Ababa',
      to: 'Bahir Dar',
      busNumber: 'B456',
      driver: 'Jane Smith',
      status: 'Completed'
    },
    {
      date: '2024-06-10',
      from: 'Addis Ababa',
      to: 'Gondar',
      busNumber: 'C789',
      driver: 'Michael Johnson',
      status: 'In Progress'
    },
    {
      date: '2024-06-15',
      from: 'Addis Ababa',
      to: 'Mekelle',
      busNumber: 'D012',
      driver: 'Emma Davis',
      status: 'Upcoming'
    },
  ];

  return (
    <Tabs py={{ base: '130px', md: '130px' }} px={{ base: '4', md: '8' }}>
      <Text fontSize='2xl' fontWeight='bold' mb='8'>Travel History</Text>
      <TabList>
        <Tab>Completed</Tab>
        <Tab>Cancelled</Tab>
        <Tab>Upcoming</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* JSX for Completed tab */}
          <div className='flex flex-col'>
            0: Completed Tickets
          </div>
            <Button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10' type='button'>
               Delete History
            </Button>
        </TabPanel>
        <TabPanel>
          {/* JSX for Cancelled tab */}
          <div className='flex flex-col'>
           0:  Cancel Tickets
          </div>
           <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10' type='button'>
                Ask Refund ?
            </button>
        </TabPanel>
        <TabPanel>
          {/* JSX for Upcoming tab */}
          <div className='flex flex-col'>
           0:  Upcoming Tickets
          </div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10' type='button'>
                Cancel
            </button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TravelHistory;
