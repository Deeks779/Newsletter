import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../utils/auth";

const defaultUser = {
  name: "Test User",
  email: "test@example.com",
  password: "123456",
  role :"admin"
};

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      localStorage.setItem("users", JSON.stringify([defaultUser]));
    }
  }, []);

  const { register: loginRegister, handleSubmit: handleLogin } = useForm();
  const { register: signupRegister, handleSubmit: handleSignup } = useForm({
    defaultValues:{
      role:"user"
    }
  });

  const onLogin = (data) => {
    try {
      login(data.email, data.password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const onSignup = (data) => {
    try {
      signup(data);
      alert("Signup successful. Please sign in.");
      setIsSignIn(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1f36]">
      <div className="hidden md:block relative w-225 h-130 bg-white rounded-2xl overflow-hidden">
        <div
          className={`absolute inset-0 w-full h-full flex transition-transform duration-700
          ${isSignIn ? "translate-x-0" : "translate-x-0"}`}
        >

          {/* SIGN UP */}
          <div className="w-full flex items-center justify-center">
            <Card shadow="none" className="w-[80%]">
              <CardBody className="gap-4">
                <h2 className="text-2xl font-semibold text-center">
                  Create Account
                </h2>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSignup(onSignup)}
                >
                  <Input
                    label="Name"
                    variant="bordered"
                    {...signupRegister("name", { required: true })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    variant="bordered"
                    {...signupRegister("email", { required: true })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    {...signupRegister("password", { required: true })}
                  />

                  <Button type="submit" className="bg-[#0b1f36] text-white">
                    Sign Up
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* SIGN IN */}
          <div className="w-full flex items-center justify-center">
            <Card shadow="none" className="w-[80%]">
              <CardBody className="gap-4">
                <h2 className="text-2xl font-semibold text-center">
                  Sign In
                </h2>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleLogin(onLogin)}
                >
                  <Input
                    label="Email"
                    type="email"
                    variant="bordered"
                    {...loginRegister("email", { required: true })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    {...loginRegister("password", { required: true })}
                  />

                  <Button type="submit" className="bg-[#0b1f36] text-white">
                    Sign In
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* OVERLAY PANEL */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full bg-[#BBA782] text-[#0b1f36]
          flex flex-col items-center justify-center text-center p-10
          transition-transform duration-700
          ${isSignIn ? "-translate-x-full" : "translate-x-0"}`}
        >
          {isSignIn ? (
            <>
              <h2 className="text-3xl font-bold mb-2">
                Hello, Friend!
              </h2>
              <p className="mb-6">
                Enter your details and start your journey
              </p>
              <Button onPress={() => setIsSignIn(false)} className="bg-[#0b1f36] text-white">
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2">
                Welcome Back!
              </h2>
              <p className="mb-6">
                To stay connected, please sign in
              </p>
              <Button onPress={() => setIsSignIn(true)} className="bg-[#0b1f36] text-white">
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
      {/* Mobile View  */}
      <div className="md:hidden w-225 h-140 ">
        {/* Sign Up  */}
        {
          !isSignIn && (
            <>
            <div className="w-full flex items-center justify-center">
            <Card shadow="none" className="w-[80%]">
              <CardBody className="gap-4">
                <h2 className="text-2xl font-semibold text-center">
                  Create Account
                </h2>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSignup(onSignup)}
                >
                  <Input
                    label="Name"
                    variant="bordered"
                    {...signupRegister("name", { required: true })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    variant="bordered"
                    {...signupRegister("email", { required: true })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    {...signupRegister("password", { required: true })}
                  />
                  <Button type="submit" className="bg-[#BBA782] text-white">
                    Sign Up
                  </Button>
                </form>
                <div className=" flex text-sm justify-center">
                  Already have account?
                  <Button onPress={()=>setIsSignIn(true)} variant="flat" className="bg-white font-semibold text-[#0b1f36] pb-3" size="sm">SignIn</Button>
                </div>
              </CardBody>
            </Card>
        </div>
            </>
          )
        }
          {/* SIGN IN */}
          {
            isSignIn && (
              <>
              <div className="w-full flex items-center justify-center">
            <Card shadow="none" className="w-[80%]">
              <CardBody className="gap-4">
                <h2 className="text-2xl font-semibold text-center">
                  Sign In
                </h2>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleLogin(onLogin)}
                >
                  <Input
                    label="Email"
                    type="email"
                    variant="bordered"
                    {...loginRegister("email", { required: true })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    variant="bordered"
                    {...loginRegister("password", { required: true })}
                  />
                  <Button type="submit" className="bg-[#BBA782] text-white">
                    Sign In
                  </Button>
                </form>
                <div className=" flex text-sm justify-center">
                  Need an account?
                  <Button onPress={()=>setIsSignIn(false)} variant="flat" className="bg-white font-semibold text-[#0b1f36] pb-3" size="sm">SignUp</Button>
                </div>
              </CardBody>
            </Card>
          </div>
              </>
            )
          }
          {
            isSignIn? (<>
            <p></p>
            
            </>) :(<>
            <p>Need an Account?</p>
            </>)
          }
      </div>
    </div>
  );
}
