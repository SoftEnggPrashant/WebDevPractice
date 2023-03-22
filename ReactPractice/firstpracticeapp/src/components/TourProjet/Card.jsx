import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = (props) => {
  const { id, name, img, price, desc, notIntrestHandler, interestHandler } =
    props;

  const [show, setShowMore] = useState(true);

  const description = show ? `${desc.substring(0, 120)}...` : desc;
  return (
    <VStack>
      <VStack
        alignItems={"flex-start"}
        w={"18rem"}
        py={3}
        px={3}
        bgColor={"gray.100"}
        borderRadius={"md"}
      >
        <Image
          src={img}
          w={"18rem"}
          h={"18rem"}
          objectFit={"cover"}
          borderRadius={"md"}
        />
        <Text color={"green.500"} fontSize={"bold"}>{`₹${price}`}</Text>
        <Text fontSize={"2xl"} fontWeight={600}>
          {name}
        </Text>
        <Text textAlign={"justify"}>
          {description}
          <span className="show-more" onClick={() => setShowMore(!show)}>
            {show ? "Show More" : "Show Less"}
          </span>
        </Text>
        <HStack>
          <Button
            variant={"outline"}
            border={"2px"}
            borderColor={"red.300"}
            _hover={{ bg: "red.400",color:'white'}}
            onClick={() => notIntrestHandler(id)}
          >
            Not Interested
          </Button>
          <Button
            variant={"outline"}
            border={"2px"}
            borderColor={"red.300"}
            _hover={{ bg: "red.400", color:'white' }}
            onClick={() => interestHandler(id)}
          >
            Interested
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
