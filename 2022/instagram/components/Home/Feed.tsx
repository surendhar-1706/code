import { Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import FeedPost from './FeedPost';

function Feed() {
    let map_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    return <VStack marginTop={10} gap={5}>
        {map_data.map((data) => {
            return <Box key={data}>
                <FeedPost id={data} />
            </Box>
        })}



    </VStack>;
}

export default Feed;
