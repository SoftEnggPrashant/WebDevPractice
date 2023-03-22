import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import data from "../../data";

const Tour = () => {
  const [newData, setData] = useState(data);

  const notIntrestHandler = (id) => {
    setData(newData.filter((item) => item.id !== id));
  };

  const interestHandler  = (id) => {
    setData(newData.filter((item) => item.id === id));
  }


  if (newData.length <= 0) {
    return (
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading
          as={"h2"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color={"gray.800"}
        >
          No tours found
        </Heading>
        <Button onClick={() => setData(data)}>Refresh</Button>
      </VStack>
    );
  }

  return (
    <VStack>
      <Heading
        border={"5px dashed black"}
        borderRadius={"2xl"}
        py={2}
        px={8}
        m={5}
        borderColor={'gray.400'}
      >
        Plan With Love
      </Heading>
      <HStack flexWrap={"wrap"} alignItems={'normal'} w={'80%'} justifyContent={'center'} gap={5} >
        {newData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.image}
            desc={item.info}
            price={item.price}
            notIntrestHandler={notIntrestHandler}
            interestHandler={interestHandler}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default Tour;
