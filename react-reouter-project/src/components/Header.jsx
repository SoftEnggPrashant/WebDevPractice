import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/Logo.svg";

const Header = (props) => {
  const { isAuthenticated, setIsAuthenticated } = props;

  const navigate = useNavigate();

  const logoutHandler = () => {
    toast.success("Logged out");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <HStack justifyContent={"space-around"} p={4} bgColor={"gray.300"}>
      <Link to={'/'} >
      <Image src={logo}/>
      </Link>
      <HStack gap={5}>
        <Button>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button>
          <Link to={"/about"}>About</Link>
        </Button>
        <Button>
          <Link to={"/contact"}>Contact</Link>
        </Button>
      </HStack>
      <HStack gap={5}>
        {isAuthenticated && <Button onClick={logoutHandler}>Logout</Button>}
        {isAuthenticated && (
          <Button>
            <Link to={"/dashbord"}>Dashbord</Link>
          </Button>
        )}
        {!isAuthenticated && (
          <Button>
            <Link to={"/login"}>Login</Link>
          </Button>
        )}
        {!isAuthenticated && (
          <Button>
            <Link to={"/signup"}>Signup</Link>
          </Button>
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
