import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import backgroundImage from "../assets/frame.png";

const Template = (props) => {
  const { title, des1, des2, formType, setIsAuthenticated, image } = props;
  return (
    <HStack>
      <VStack>
        <Heading>{title}</Heading>
        <Text>{des1}</Text>
        <Text>{des2}</Text>
        {formType === "signup" ? (
          <SignupForm setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <LoginForm setIsAuthenticated={setIsAuthenticated} />
        )}
        <HStack>
          <Stack></Stack>
          <Text>OR</Text>
          <Stack></Stack>
        </HStack>

        <Button>Signup with google</Button>
      </VStack>
      <VStack>
        <Image src={image} />
        <Image src={backgroundImage} />
      </VStack>
    </HStack>
  );
};

export default Template;
