import { Badge, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <HStack
      justifyContent={"space-evenly"}
      w={"full"}
      gap={10}
      bgColor={"#0b0524"}
      p={3}
    >
      <NavLink to={"/"}>
        <Image src={logo} w={"8rem"} />
      </NavLink>
      <HStack justifyContent={"space-between"} w={"5%"} position={"relative"}>
        <NavLink to={"/"}>
          <Text color={"whiteAlpha.800"}>Home</Text>
        </NavLink>
        <NavLink to={"/carts"}>
          <FaCartPlus fontSize={"2rem"} color="white" />
          <HStack position={"absolute"} top={-1}>
            {carts.length > 0 && (
              <Badge
                bgColor={"green.700"}
                color={"white"}
                borderRadius={"full"}
              >
                {carts.length}
              </Badge>
            )}
          </HStack>
        </NavLink>
      </HStack>
    </HStack>
  );
};

export default Header;
