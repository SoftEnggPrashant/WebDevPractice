import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const VideoUpload = ({ setLoading }) => {
	const [name, setName] = useState("");
	const [videos, setVideos] = useState([]);

	const uploadFiles = async (uploadData) => {
		try {
			setLoading(true);
			const { data } = await axios.post(
				"http://localhost:4000/api/v1/upload/media",
				uploadData
			);
			console.log("upload response", data);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const uploadHandler = () => {
		let formData = new FormData();

		for (let key in videos) {
			formData.append("videos", videos[key]);
		}
		formData.append("name", name);

		uploadFiles(formData);
	};

	return (
		<Stack w={"full"}>
			<FormControl>
				<Stack
					w={"80%"}
					gap={5}
				>
					<Stack>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							name="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</Stack>
					<Stack>
						<Input
							type="file"
							multiple
							name="videos"
							accept=".mp4,.mkv"
							onChange={(event) => setVideos(event.target.files)}
						/>
					</Stack>
					<Button onClick={uploadHandler}>Upload</Button>
				</Stack>
			</FormControl>
		</Stack>
	);
};

export default VideoUpload;
