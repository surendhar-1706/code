import { Box, Image, Text, VStack } from '@chakra-ui/react';
// import Image from 'next/image';
import React from 'react';
import { useQueries, useQuery } from 'react-query';
type storyusertype = {
    id: number
}
function Storyuserdata(props: storyusertype) {
    const fetchuser = async () => {
        const data = await fetch('https://randomuser.me/api/')
        const json_data = await data.json()
        console.log(json_data, 'story user data')
        return json_data
    }
    let name = 'random_data' + props.id
    const { data } = useQuery(name, fetchuser)
    return <Box >

        {data &&
            <VStack>
                <Box

                    h={'14'}
                    w={'14'}

                    overflow='hidden'
                    borderWidth='2px'
                    borderTopColor={'red.400'}
                    borderLeftColor={'pink.400'}
                    borderRightColor={'pink.400'}
                    borderBottomColor={'red.400'}

                    rounded='full'>
                    <Image
                        overflow={'hidden'}
                        src={data.results[0]['picture'].thumbnail
                        }

                        height={'14'}
                        width={'14'}

                    />


                </Box>
                <Text noOfLines={1}>{data.results[0]['name'].first}</Text>
            </VStack>
        }


    </Box >
}
export default Storyuserdata;
