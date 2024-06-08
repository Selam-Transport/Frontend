import React from 'react';
import { Box, Heading, Text, Divider, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const ProfileSetting = () => {
  return (
    <Box maxW="lg" mx="auto" py="40" px="4" >
      <Heading as="h1" mb="6" textAlign="center">Profile Settings</Heading>
      <Box borderWidth="1px" borderRadius="lg" p="6" boxShadow="lg"  _hover={ {bgColor:'gray.100' }}>
        <Text fontSize="lg" fontWeight="bold" mb="4">Personal Information</Text>
        <Divider mb="4" />
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button colorScheme="blue" size="md" mb="4">Update Information</Button>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p="6" boxShadow="lg" mt="8" _hover={ {bgColor:'gray.100' }}>
        <Text fontSize="lg" fontWeight="bold" mb="4">Change Password</Text>
        <Divider mb="4" />
        <FormControl id="currentPassword" mb="4">
          <FormLabel>Current Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="newPassword" mb="4">
          <FormLabel>New Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="confirmPassword" mb="4">
          <FormLabel>Confirm New Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" size="md" mb="4">Change Password</Button>
      </Box>
    </Box>
  );
}

export default ProfileSetting;
