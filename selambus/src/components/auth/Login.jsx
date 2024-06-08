import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useToast } from '@chakra-ui/react';

export default function Login() {
  const toast = useToast();

  const handleLogin = () => {
    // Create an example promise that resolves in 5s
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 5000)
    });

    // Will display the loading toast until the promise is either resolved or rejected.
    toast.promise(examplePromise, {
      success: { title: 'Promise resolved', description: 'Looks great' },
      error: { title: 'Promise rejected', description: 'Something wrong' },
      loading: { title: 'Promise pending', description: 'Please wait' },
    });
    window.location.href = '/';
    
  };

  return (
    <Card color="transparent" shadow={false} className="items-center pt-10">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            color="green"
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          color="green"
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              remember me
              <a
                href="/resetpassword"
                className="font-medium  text-xl transition-colors hover:text-green-900 ml-20"
              >
                &nbsp; Forgot Password?
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button onClick={handleLogin} className="mt-6 bg-green-500" fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-green-900">
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
