import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Blog = (props) => {
  const { title, author, category, date, tags, content, id } = props.post;
  return (
    <VStack alignItems={"flex-start"} w={"45rem"}>
      <Heading fontSize={"2xl"} _hover={{ textDecoration: "underline" }}>
        <NavLink to={`/detail/${id}`}>{title}</NavLink>
      </Heading>
      <HStack>
        <Text>{author}</Text>
        <NavLink to={`/category/${category.replaceAll(" ", "-")}`}>
          <Text as={"i"} css={{ textDecoration: "underline" }}>
            {category}
          </Text>
        </NavLink>
      </HStack>
      <Text> Posted on {date}</Text>
      <Text>{content}</Text>
      <HStack wrap={"wrap"}>
        {tags.map((tag, index) => (
          <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
            <Text color={"blue"} as={"u"}>{`#${tag}`}</Text>
          </NavLink>
        ))}
      </HStack>
    </VStack>
  );
};

export default Blog;
