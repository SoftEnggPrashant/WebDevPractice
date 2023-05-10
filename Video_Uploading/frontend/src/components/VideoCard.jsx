import { AspectRatio, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const VideoCard = ({ videos }) => {
	console.log('video', videos);
	return (
		<Stack w={'full'}>
			<Text>{videos.name}</Text>
			{videos.videos &&
				videos.videos.map((video, index) => (
					// This video will have equal sides
					<AspectRatio
						maxW={'full'}
						ratio={1}
						key={index}
					>
						<iframe
							title='naruto'
							src={video}
							allowFullScreen
						/>
					</AspectRatio>
				))}
		</Stack>
	);
};

export default VideoCard;
