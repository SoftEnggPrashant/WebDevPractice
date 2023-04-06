import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <HStack
      justifyContent={"center"}
      py={2}
      borderBottom={"1px"}
      w={"full"}
      boxShadow={"lg"}
      position={'fixed'}
      top={0}
      bgColor={'white'}
    >
      <Heading>BLOGS</Heading>
    </HStack>
  );
};

export default Header;
