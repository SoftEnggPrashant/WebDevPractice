import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Blog from "../components/Blog";
import Spinner from "../components/Spinner";

const BlogDetail = () => {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const getBlogDetails = async () => {
    setLoading(true);
    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    try {
      const { data } = await axios.get(`${baseUrl}?blogId=${id}`);
      console.log(data);
      setBlogData(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  return (
    <VStack pt={'5rem'} gap={5}>
      <Button onClick={()=> navigate(-1)} >Back</Button>
      <VStack>
        {Object.keys(blogData).length > 0 ? (
          <Blog post={blogData} />
        ) : (
          <Text>NO Data</Text>
        )}
      </VStack>
      <Heading>Related Blogs</Heading>
      <VStack>
        {loading ? (
          <Spinner />
        ) : (
          relatedBlog.length > 0 &&
          relatedBlog.map((post) => <Blog key={post.id} post={post} />)
        )}
      </VStack>
    </VStack>
  );
};

export default BlogDetail;
