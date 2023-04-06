import { Button, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import AppContext from "../DataContext/BlogContext";

const Category = () => {
  const { getPosts, loading, posts,page} = useContext(AppContext);
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll(" ", "-");
  const navigate = useNavigate();
  console.log(category);

  useEffect(() => {
    getPosts(Number(page),'',category);
    console.log('call')
  }, [category,location.pathname,page]);

  return (
    <VStack pt={"5rem"}>
    <Button onClick={()=> navigate(-1)}>Back</Button>
      {loading ? (
        <Spinner />
      ) : (
        posts.length > 0 &&
        posts.map((post) => <Blog key={post.id} post={post} />)
      )}
      <Pagination/>
    </VStack>
  );
};

export default Category;
