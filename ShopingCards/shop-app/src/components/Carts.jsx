import { Button, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const Carts = () => {
  const carts = useSelector((state) => state.carts);
  const total = carts.reduce((acc,current) => acc += current.price,0);

  return (
    <HStack w={"80%"} justifyContent={"space-evenly"}>
      <HStack w={"full"} position={"relative"}>
        <VStack w={"50%"} gap={10}>
          {carts.length > 0 ? (
            carts.map((cart) => <Cart key={cart.id} cart={cart} />)
          ) : (
            <NavLink to={"/"}>
              <Button borderRadius={"full"} border={"2px"}>
                Shop Now
              </Button>
            </NavLink>
          )}
        </VStack>
        <VStack
          w={"30%"}
          position={"fixed"}
          top={5}
          right={5}
          justifyContent={"space-between"}
          alignItems={'flex-start'}
          h={"full"}
          py={"10rem"}
        >
          <VStack alignItems={"flex-start"} gap={10}>
            <Text fontSize={'4xl'} >Your Card</Text>
            <Text>Summary</Text>
            <Text>Total Items {carts.length}</Text>
          </VStack>
          <VStack>
            <Text>Total Amount : {total}</Text>
            <Button>Cheout Now</Button>
          </VStack>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default Carts;
