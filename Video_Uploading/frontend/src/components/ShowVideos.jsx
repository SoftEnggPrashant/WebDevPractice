import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const ShowVideos = ({ videoData }) => {
	console.log("video Data", videoData);
	return (
		<Stack
			w={"full"}
			direction={"column"}
		>
			<Text>{videoData.name}</Text>
			<video
				width="500"
				height="500"
				controls
				preload="auto"
			>
				<source
					src={`${videoData.video}`}
					type="video/mp4"
				/>
			</video>
		</Stack>
	);
};

export default ShowVideos;
