import { Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VideoUpload from "./VideoUpload";
import ShowVideos from "./ShowVideos";
import axios from "axios";

const Home = () => {
	const [videosData, setVideos] = useState([]);
	const [loading, setLoading] = useState(false);
	const getAllVideos = async () => {
		try {
			const { data } = await axios.get(
				" http://localhost:4000/api/v1/getMedia"
			);
			console.log("api response", data);
			setVideos(data.data);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getAllVideos();
	}, []);

	console.log(videosData);
	return loading ? (
		<Stack
			w={"full"}
			h={"100vh"}
			flexDir={"row"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<VStack>
				<Spinner />
				<Text>Upload...</Text>
			</VStack>
		</Stack>
	) : (
		<Stack
			w={"full"}
			direction={"row"}
		>
			<Stack
				w={"50%"}
				direction={"row"}
				justifyContent={"center"}
			>
				<VideoUpload setLoading={setLoading} />
			</Stack>
			<Stack
				w={"50%"}
				direction={"column"}
				justifyContent={"center"}
			>
				{videosData.map((videoData) => (
					<ShowVideos
						key={videoData._id}
						videoData={videoData}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default Home;
