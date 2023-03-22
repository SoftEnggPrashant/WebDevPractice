import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import btnsrc1 from "../assets/1.jpg";
import btnsrc2 from "../assets/2.jpg";
import btnsrc3 from "../assets/3.jpg";
import btnsrc4 from "../assets/4.jpg";
import btnsrc5 from "../assets/5.jpg";


const Home = () => {
  return (
    <Box bgColor={"gray.100"} w={"full"} py={2} >
      <Carousel
        autoPlay={true}
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <Image src={btnsrc1} borderRadius={'1xl'} />
        <Image src={btnsrc2} borderRadius={'1xl'} />
        <Image src={btnsrc3} borderRadius={'1xl'} />
        <Image src={btnsrc4} borderRadius={'1xl'} />
        <Image src={btnsrc5} borderRadius={'1xl'} />
      </Carousel>
    </Box>
  );
};

export default Home;
