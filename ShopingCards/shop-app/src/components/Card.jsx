import { VStack, Text, Image, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../reduxslices/CardSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Card = (props) => {
  const { title, image, price, description, id } = props.product;
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const addCardHandler = () => {
    toast.success("Card added successfully");
    dispatch(addCard(props.product));
  };

  return (
    <VStack
      w={"20rem"}
      gap={2}
      p={10}
      _hover={{ transform: "scale(1.1)", transition: "all 0.6s ease-in" }}
      alignItems={"flex-start"}
      borderRadius={"2xl"}
      className="card"
    >
      <Text noOfLines={1} fontWeight={"semibold"}>
        {title}
      </Text>
      <Text noOfLines={2} fontSize={"sm"}>
        {description.split(" ").slice(0, 10).join(" ")}
      </Text>
      <Image src={image} w={"240px"} h={"200px"} objectFit={"contain"} />
      <Text color={"green"} fontSize={"lg"}>
        ₹{price}
      </Text>
      <HStack>
        <Button borderRadius={"full"} border={"2px"}>
          Buy Now
        </Button>

        {carts.some((item) => item.id === id) ? (
          <NavLink to={"/carts"}>
            <Button borderRadius={"full"} border={"2px"}>
              Preview
            </Button>
          </NavLink>
        ) : (
          <Button borderRadius={"full"} border={"2px"} onClick={addCardHandler}>
            Add to Card
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default Card;
