import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {setIsAuthenticated} = props;

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("password is not match");
    } else {
      setIsAuthenticated(true);
      toast.success("Sign in successful");
      console.log(formData);
      navigate("/dashbord");
    }
  };

  const changeHandler = (event) =>{
    setFormData(prevState => ({
    ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={submitHandler}>
      <HStack>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="first name"
            onChange={changeHandler}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            onChange={changeHandler}
          />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={changeHandler}
        />
      </FormControl>

      <HStack>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            required
            type={isVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={changeHandler}
          />
          <IconButton
            icon={isVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            onClick={() => setIsVisible(!isVisible)}
          ></IconButton>
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            required
            type={isVisibleConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
          />
          <IconButton
            icon={isVisibleConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
            onClick={() => setIsVisibleConfirm(!isVisibleConfirm)}
          ></IconButton>
        </FormControl>
      </HStack>

      <button>Sign Up</button>
    </form>
  );
};

export default SignupForm;
