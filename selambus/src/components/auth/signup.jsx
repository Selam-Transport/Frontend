import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useToast } from '@chakra-ui/react';
  import { useState } from 'react';



  export default function Signup() {
    const toast = useToast();
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    
    const handleSignup = () => {
      // Check if all input fields are filled correctly
      if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        email.trim() === '' ||
        phoneNumber.trim() === '' ||
        password.trim() === '' ||
        !agreeTerms
      ) {
        // If any input field is empty, show an error toast
        toast({
          title: 'Error',
          description: 'Please fill in all the fields.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    
      // Assuming other validation checks are performed here...
    
      // If all input fields are filled correctly, show success toast and redirect
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    
      // Redirect to the login page after signup
      window.location.href = '/login';
    };
    
    

    return (
      <Card color="transparent" shadow={false} className="items-center pt-10">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome! Enter your details to create an account.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <Typography variant="h6" color="blue-gray" className="-mb-1">
                  First Name
                </Typography>
                <Input
  size="lg"
  placeholder="John"
  color="green"
  name="firstName"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  labelProps={{
    className: "before:content-none after:content-none",
  }}
/>

              </div>
              <div className="w-1/2">
                <Typography variant="h6" color="blue-gray" className="-mb-1">
                  Last Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Doe"
                  color="green"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="john@example.com"
              color="green"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="123-456-7890"
              color="green"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              color="green"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
  color="green"
  checked={agreeTerms}
  onChange={(e) => setAgreeTerms(e.target.checked)}
  label={
    <Typography
      variant="small"
      color="gray"
      className="flex items-center font-normal"
    >
      I agree to the
      <a
        href="#"
        className="font-medium transition-colors hover:text-gray-900"
      >
        &nbsp;Terms and Conditions
      </a>
    </Typography>
  }
  containerProps={{ className: "-ml-2.5" }}
/>

          <Button onClick={handleSignup} className="mt-6 bg-green-500" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-green-900">
              Login
            </a>
          </Typography>
        </form>
      </Card>
    );
  }
  