import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const InfoCard = (props) => {
  const { name, job, image, text } = props.review;
  return (
    <VStack position={"relative"}>
      <Stack
        w={"7rem"}
        h={"7rem"}
        bgColor={"#8F00FF"}
        borderRadius={"full"}
        position={"absolute"}
        left={1}
        top={'-4.5rem'}
      ></Stack>
      <Image
        src={image}
        w={"7rem"}
        borderRadius={"full"}
        position={"absolute"}
        left={-1}
        top={'-5rem'}
      />
      <Text>{name}</Text>
      <Text>{job}</Text>
      <Text>{text}</Text>
    </VStack>
  );
};

export default InfoCard;
