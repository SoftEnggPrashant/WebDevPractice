import { Box, Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);

  return (
    <VStack
      w={"full"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#344151"}
      gap={"5"}
    >
      <Text color={'whiteAlpha.900'} fontSize={20} >Increment & Decrement</Text>
      <HStack bgColor={"gray.200"} gap={5} borderRadius={"base"} px={5} py={2}>
        <Box borderRight={"2px solid gray"}>
          <IconButton
            variant={"unstyled"}
            icon={<SubIcon />}
            fontSize={20}
            mr={2}
            onClick={() => setNumber(num - 1)}
          />
        </Box>

        <Text>{num}</Text>

        <Box borderLeft={"2px solid gray"}>
          <IconButton
            variant={"unstyled"}
            icon={<AddIcon />}
            fontSize={20}
            ml={2}
            onClick={() => setNumber(num + 1)}
          />
        </Box>
      </HStack>
      <Button onClick={() => setNumber(0)}>Reset</Button>
    </VStack>
  );
};

export default Counter;

const AddIcon = () => {
  return <i class="fa-solid fa-plus"></i>;
};

const SubIcon = () => <i class="fa-solid fa-minus"></i>;
