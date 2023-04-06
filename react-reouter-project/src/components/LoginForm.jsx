import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {


  const {setIsAuthenticated} = props;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const changeHandler = (event) =>{
    setFormData(prevState =>({
    ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    setIsAuthenticated(true);
    console.log("login data",formData);
    toast.success("Login Successful");
    navigate('/dashbord');
  }

  return (
    <VStack>
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            required
            type="email"
            placeholder="Enter the email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            required
            type={isVisible ? "text" : "password"}
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
          <IconButton
            icon={isVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            onClick={() => setIsVisible(!isVisible)}
          ></IconButton>
        </FormControl>
        <button>Login</button>
      </form>
    </VStack>
  );
};

export default LoginForm;
