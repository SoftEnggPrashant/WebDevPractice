import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/ProductAction";
import { HStack } from "@chakra-ui/react";
import Spinner from "./Spinner";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  },[]);

  if (error) return;
  return (
    <HStack justifyContent={'center'} flexWrap={'wrap'} gap={10} w={'full'} h={'full'} pt={10} alignItems={'center'} >
      {isLoading ? (
        <Spinner />
      ) : (
        products.map((product) => <Card key={product.id} product={product} />)
      )}
    </HStack>
  );
};

export default Home;
