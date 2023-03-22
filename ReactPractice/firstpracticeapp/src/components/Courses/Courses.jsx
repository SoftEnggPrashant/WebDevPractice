import { Button, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { filterData, apiUrl } from "../../data";
import axios from "axios";
import CourseCard from "./CourseCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";

const Courses = () => {
  const [courses, setCourses] = useState({});
  const [filterCourse, setFilterCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get(apiUrl);
      setCourses(data.data);
      const { Business, Design, Development, Lifestyle } = data.data;
      setFilterCourseData([
        ...Business,
        ...Design,
        ...Development,
        ...Lifestyle,
      ]);
      setLoading(false);
    };
    getData();
  }, []);

  const getAllData = ()=>{
    const { Business, Design, Development, Lifestyle } = courses;
    console.log('business',Business);
      setFilterCourseData([
        ...Business,
        ...Design,
        ...Development,
        ...Lifestyle,
      ]);
  }

  const clickHandler = (title) => {
    if (title === "All") {
      getAllData();
    }
    else{
      setFilterCourseData(courses[title])
    }
  };

  return (
    <VStack
      w={"full"}
      bgImage={"linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"}
    >
      <HStack w={"80%"} justifyContent={"center"} mt={5} wrap={'wrap'}>
        {filterData.map((item) => {
          return (
            <Button
              key={item.id}
              css={{ "&:focus": { border: "2px solid #a6c1ee" } }}
              onClick={() => clickHandler(item.title)}
            >
              {item.title}
            </Button>
          );
        })}
      </HStack>

      <HStack w={"80%"} wrap={"wrap"} gap={5} py={5} justifyContent={"center"}>
        {loading ? (
          <Loader />
        ) : (
          filterCourse.map((item) => {
            return (
              <CourseCard
                key={item.id}
                image={item.image.url}
                title={item.title}
                des={item.description}
              />
            );
          })
        )}
      </HStack>
      <ToastContainer />
    </VStack>
  );
};

export default Courses;
