import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  
  export default function ForgotPassword() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the form submission to request a password reset
    };
  
    return (
      <Card color="transparent" shadow={false} className="items-center pt-10">
        <Typography variant="h4" color="blue-gray">
          Forgot Password
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your email to reset your password.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="email"
              placeholder="name@mail.com"
              color="green"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6 bg-green-500" fullWidth>
            Reset Password
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Remembered your password?{" "}
            <a href="/login" className="font-medium text-green-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }
  