import { VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import AppContext from "../DataContext/BlogContext";
import Blog from "./Blog";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading, getPosts,page } = useContext(AppContext);


  useEffect(()=>{
    getPosts(Number(page));
  },[])

  return (
    <VStack pt={'5rem'} pb={'5rem'} >
      {loading ? (
        <Spinner />
      ) : (
        posts.map((post) => <Blog key={post.id} post={post} />)
      )}
    </VStack>
  );
};

export default Blogs;
