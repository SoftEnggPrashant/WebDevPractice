import { VStack, Heading, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import reviews from "../../reviews";
import InfoCard from "./InfoCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const leftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightHandler = () => {
    setIndex((index + 1) % reviews.length);
  };

  const surprizeHandler = () => {
    setIndex(Math.floor(Math.random() * reviews.length));
  };

  return (
    <VStack
      w={"100%"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack w={'35%'}>
        <Heading borderBottom={"2px solid green"}>Testimonials</Heading>
        <InfoCard review={reviews[index]} />
        <HStack>
          <Button onClick={leftHandler}>
            <FaAngleLeft />
          </Button>
          <Button onClick={rightHandler}>
            <FaAngleRight />
          </Button>
        </HStack>
        <Button onClick={surprizeHandler}>Surprize</Button>
      </VStack>
    </VStack>
  );
};

export default Testimonials;
