import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";

const CourseCard = (props) => {


  const[clicked,setClicked] = useState(false);

  const { image, title, des } = props;
  const description = des.substring(0, 130);

  const clickHandler = () =>{
    setClicked(!clicked);
    !clicked ? toast.success("Liked") : toast.warn("UnLike");
  }
  return (
    <VStack
      p={4}
      bgImage={"linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"}
      position={"relative"}
      borderRadius={"lg"}
    >
      <VStack w={"18rem"} alignItems={"flex-start"} gap={3}>
        <Image
          src={image}
          w={"18rem"}
          height={"10rem"}
          objectFit={"contain"}
          borderRadius={"lg"}
        />
        <Button
          position={"absolute"}
          right={1}
          top={"40%"}
          borderRadius={"full"}
          p={0}
          bgImage={'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'}
          onClick={clickHandler}
        >
        <IconContext.Provider 
        value={clicked?{color:'#f07dd7'}:{color:'#fce3f7'}}
        >
          <AiFillHeart fontSize={"2rem"}/>
        </IconContext.Provider>
        </Button>
        <Text textAlign={"justify"} fontWeight={"bold"} noOfLines={1}>
          {title}
        </Text>
        <Text>{description}</Text>
      </VStack>
    </VStack>
  );
};

export default CourseCard;
