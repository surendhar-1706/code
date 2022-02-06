
import { Avatar, Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useQuery } from 'react-query';
import useSWR from 'swr';
import { IconButton } from '@chakra-ui/react'
const fetchuser = async () => {
    const data = await fetch('https://randomuser.me/api/')
    const json_data = await data.json()
    console.log(json_data, 'from feed post')
    return json_data
}
type storyusertype = {
    id: number
}
import { AiOutlineHeart } from "react-icons/ai";
function FeedPost(props: storyusertype) {
    let name = 'random_data' + props.id
    // const { data } = useQuery(name, fetchuser)
    const { data } = useSWR(name, fetchuser, {
        revalidateOnFocus: true, dedupingInterval: 600000, revalidateOnMount: true
    })
    return <div>

        <Stack>
            <HStack p={3} borderWidth='1px' justify={'space-between'}>
                <HStack>
                    <Avatar name='Dan Abrahmov' src={data && data.results[0]['picture'].thumbnail} />
                    <Text>Name</Text></HStack>
                <BsThreeDots />
            </HStack>


            {data && <Image height={500} width={700} src={data && data.results[0]['picture'].large} />}
            <HStack>


                <Box as={'button'}> <AiOutlineHeart /></Box>



            </HStack>
        </Stack>

    </div>;
}

export default FeedPost;
