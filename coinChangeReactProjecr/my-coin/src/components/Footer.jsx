import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={'#13283a'}
      color={"whiteAlpha.900"}
      minH={48}
      px={16}
      py={[16, 8]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"-moz-initial"}
      >
        <VStack w={['full','70%']} alignItems={["center", "flex-start"]} borderRight={['none','2px solid white']} >
         <VStack w={'70%'} alignItems={["center", "flex-start"]}>
         <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            The Best Crpto Trading App in India,A crypto app is a mobile or
            desktop application designed to facilitate the buying, selling, and
            trading of cryptocurrencies. These apps provide users with a simple
            and secure way to manage their digital assets, monitor price
            fluctuations, and execute trades in real-time.
          </Text>
         </VStack>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}/>
          <Text>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
