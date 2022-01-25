import React from 'react';
import { Box, Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import TodoList from './TodoList';
import { IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa";
import Addtodo from './addtodo';
function Todo() {
    return <div>
        <VStack p={5}>
            <IconButton aria-label='Sun icon' icon={<FaSun />} rounded='full' alignSelf='flex-end' />

            <Heading bgGradient='linear(to-r, pink.400, blue.500)' bgClip='text' fontSize='5xl'> Todo Application</Heading>

            <TodoList />

            <Addtodo />
        </VStack>
    </div >;
}

export default Todo;
