import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../DataContext/BlogContext";

const Pagination = () => {
  const { page, totalPages, pageHandler } = useContext(AppContext);

  return (
    <HStack
      w={"full"}
      justifyContent={"space-evenly"}
      py={4}
      position={"fixed"}
      bottom={0}
      bgColor={"white"}
    >
      <HStack gap={5}>
        {page > 1 && (
          <Button onClick={() => pageHandler(page - 1)} border={"1px"}>
            previous
          </Button>
        )}
        {page < totalPages && (
          <Button onClick={() => pageHandler(page + 1)} border={"1px"}>
            Next
          </Button>
        )}
      </HStack>
      <Text as={"b"}>{`Page ${page} of ${totalPages}`}</Text>
    </HStack>
  );
};

export default Pagination;
