import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={3} bgColor={"#13283a"} gap={5}>
      <Button
        variant={"unstyled"}
        color={"white"}
        _active={{ color: "blue.300" }}
      >
        <Link to={"/"}>Home</Link>
      </Button>

      <Button
        variant={"unstyled"}
        color={"white"}
        _active={{ color: "blue.300" }}
      >
        <Link to={"/couterapp"}>CounterApp</Link>
      </Button>

      <Button
        variant={"unstyled"}
        color={"white"}
        _active={{ color: "blue.300" }}
      >
        <Link to={"/tours"}>Tour</Link>
      </Button>

      <Button
        variant={"unstyled"}
        color={"white"}
        _active={{ color: "blue.300" }}
      >
        <Link to={"/courses"}>Course</Link>
      </Button>

      <Button
        variant={"unstyled"}
        color={"white"}
        _active={{ color: "blue.300" }}
      >
        <Link to={"/testimonial"}>Testimonial</Link>
      </Button>
    </HStack>
  );
};

export default Header;
