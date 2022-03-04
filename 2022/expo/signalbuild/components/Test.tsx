import { Box, Button, Pressable, Text } from 'native-base'
import React from 'react'

function Test() {
    return (
        <Box>
            <Button onPress={() => console.log("hello world")}>Click Me</Button>
            <Pressable onPress={() => console.log("pressable clicked")}>
                <Text> I am a Pressable</Text>

            </Pressable>
            <Text>hello signal</Text>
        </Box>
    )
}

export default Test