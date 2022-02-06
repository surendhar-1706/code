
import { Avatar, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useQuery } from 'react-query';
const fetchuser = async () => {
    const data = await fetch('https://randomuser.me/api/')
    const json_data = await data.json()
    console.log(json_data, 'from feed post')
    return json_data
}
type storyusertype = {
    id: number
}
function FeedPost(props: storyusertype) {
    let name = 'random_data' + props.id
    // const { data } = useQuery(name, fetchuser)
    return <div>

        <HStack justify={'space-between'} >
            <HStack>
                {/* <Avatar name='Dan Abrahmov' src={data && data.results[0]['picture'].thumbnail} /> */}
                <Text>Name</Text></HStack>
            <BsThreeDots />
        </HStack>

    </div>;
}

export default FeedPost;
