import { Button, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import AppContext from "../DataContext/BlogContext";

const TagPage = () => {
  const { getPosts, loading, posts,page} = useContext(AppContext);
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  const navigate = useNavigate();

  useEffect(()=>{
    getPosts(Number(page),tag,'');
  },[tag,location.pathname,page]);

  return (
    <VStack pt={"5rem"}>
    <Button onClick={()=> navigate(-1)}>Back</Button>
      {loading ? (
        <Spinner />
      ) : (
        posts.length > 0 &&
        posts.map((post) => <Blog key={post.id} post={post} />)
      )}
      <Pagination />
    </VStack>
  );
};

export default TagPage;
