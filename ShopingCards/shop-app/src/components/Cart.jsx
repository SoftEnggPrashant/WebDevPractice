import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import { CiTrash } from "react-icons/ci";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../reduxslices/CardSlice";
import { toast } from "react-hot-toast";

const Cart = (props) => {
  const { title, image, description, price, id } = props.cart;
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    toast.error("cart removed ");
    dispatch(removeCard(id));
  };

  return (
    <HStack
      justifyContent={"center"}
      w={'full'}
      borderBottom={"2px"}
      gap={10}
      flexDirection={["column", "row"]}
    >
      <Image src={image} w={"250px"} pb={5} />
      <VStack alignItems={"flex-start"} gap={10}>
        <Text noOfLines={1} fontSize={"2xl"} fontWeight={"bold"} mt={-10}>
          {title}
        </Text>
        <Text noOfLines={4}>{description}</Text>
        <HStack justifyContent={"space-between"} w={"full"}>
          <Text fontSize={"2xl"} color={"green"}>
            ₹{price}
          </Text>
          <CiTrash
            fontSize={"1.5rem"}
            color={"red"}
            onClick={() => removeHandler(id)}
          />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Cart;
