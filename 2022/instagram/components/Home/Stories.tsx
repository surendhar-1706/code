import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import Storyuserdata from './Storyuserdata';




function Stories() {
    //let map_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let map_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    //let map_data = [1, 2]

    return <HStack
        borderColor={'gray.300'}
        borderWidth='1px'
        px={'4'}
        py='2'
        rounded={'md'}
        overflowX='auto'



    >
        {map_data.map((data) => {
            return <Box key={data}>
                <Storyuserdata id={data} />
            </Box>
        })}
    </HStack>
        ;
}

export default Stories;
