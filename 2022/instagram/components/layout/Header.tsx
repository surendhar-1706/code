import React, { ChangeEvent, useRef } from 'react';
import { Badge, Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Icon, IconButton, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Image from 'next/image';
import Instagram from '../../public/instagram.png'
import { AiFillHome, AiOutlineCamera, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiWechatPayLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,

} from '@chakra-ui/react'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Router, useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalstate } from '../../atoms/Modalatom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Field, FieldProps, Form, Formik, FormikProps, FormikState, FormikValues } from 'formik';
import Preview from '../Preview';
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: session } = useSession()
    const filepicker = useRef(null)
    // const [open, setopen] = useRecoilState(modalstate)
    const router = useRouter()
    return <HStack
        position={'sticky'}
        top='0'
        gap={5}
        justify={'space-between'}
        px={['2', '2', '2', '200']}
        py='1'
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        bgColor={'white'}
        zIndex={50}

    >


        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={'sm'}
            motionPreset='scale'
        >
            <ModalOverlay />
            <ModalContent mt={'32'}>

                <ModalCloseButton />
                <ModalBody p={6}>
                    <VStack gap={2} >

                        {/* <Box borderWidth={'1px'} w='full' /> */}
                        {/* <Button rounded={'full'} w='6' h='6' bgColor={'red.100'} onClick={() => { filepicker.current.click() }}>
                            <AiOutlineCamera colorScheme={'red'} />
                        </Button> */}
                        <Box as={'button'}
                        >
                            <Icon
                                bgColor={'red.100'}
                                rounded='full'
                                onClick={() => { filepicker.current.click() }}
                                w={9}
                                h={9}
                                p={1}
                                textColor='red.300'
                                as={AiOutlineCamera} /> </Box>
                        <Box >
                            <Text
                                fontWeight={'bold'}
                                fontFamily='body'>Click to choose</Text>
                        </Box>

                        <Formik initialValues={{ photo1: '', caption: '' }}
                            onSubmit={
                                (values) => {
                                    console.log(values)
                                }
                            }
                        >
                            {
                                (formikProps) => (
                                    <Form>
                                        <VStack gap={6}>

                                            <input
                                                hidden
                                                type='file'
                                                name='photo1'
                                                ref={filepicker}

                                                onChange={(event: any) => formikProps.setFieldValue('photo1', event.target.files[0])} />
                                            {/* {formikProps.values.photo1 && console.log(formikProps.values.photo1)} */}
                                            {/* < Image src={formikProps.values.photo1} /> */}


                                            {formikProps.values.photo1 && <Preview file={formikProps.values.photo1} />}

                                            <Field name='caption' >
                                                {({ field, form }: FieldProps) => (
                                                    <FormControl isInvalid={(form.errors.caption && form.touched.caption) ? true : false}>
                                                        <FormLabel htmlFor='caption'>Last name</FormLabel>
                                                        <Input {...field} id='caption' placeholder='Enter a caption' />
                                                        <FormErrorMessage textColor={'green.500'}>{form.errors.caption}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Button colorScheme={'red'} type='submit'>
                                                Upload Photo
                                            </Button>
                                        </VStack>
                                    </Form>
                                )
                            }
                        </Formik>
                    </VStack>

                </ModalBody>


            </ModalContent>
        </Modal>
        <Box as={'button'} h={'10'} w='28' mt={'3'} >
            <Image src={Instagram} onClick={() => { router.push('/') }} />
            {/* <Text>Instagram</Text> */}
        </Box>
        <Box w={'150'} display={['none', 'none', 'none', 'flex']}>
            <InputGroup textColor={'gray.500'} bgColor={'gray.50'} rounded={'sm'}>
                <InputLeftElement

                >
                    < AiOutlineSearch />
                </InputLeftElement>
                <Input type='text' placeholder='Search' />
            </InputGroup>
        </Box>
        <HStack gap={2} >
            <Icon w={7} h={7} as={AiFillHome} onClick={() => {
                router.push('/')
            }} />
            {session &&
                <HStack>
                    <Box pt={2} position={'relative'} >
                        <Icon w={7} h={7} as={BiMessageRoundedCheck} />
                        <Badge position={'absolute'} fontSize='0.6em' top='1' left='4' bgColor={'red.500'} rounded='full' variant={'solid'}>1</Badge>
                    </Box>
                    {/* <Icon w={7} h={7} as={CgAddR} /> */}
                    <Box pt={2} as={'button'}
                    >
                        <Icon onClick={onOpen} w={7} h={7} as={CgAddR} /> </Box>
                    <Icon w={7} h={7} as={MdOutlineExplore} />
                    <Icon w={7} h={7} as={AiOutlineHeart} onClick={() => {
                        router.push('/test')
                    }} />
                </HStack>}
            <Popover isLazy colorScheme={'whiteAlpha'} >
                <PopoverTrigger>
                    <Box as='button'>
                        <Avatar
                            size={'xs'}
                            name={session ? `${session?.user?.name}` : 'Anonymout'}
                            alt='profile pic'
                            src={`${session?.user?.image}`} /></Box>
                </PopoverTrigger>
                <PopoverContent w='max-content' >
                    <PopoverArrow />
                    <PopoverBody px={'5'} >
                        <VStack>
                            {session ? <Box as={'button'} onClick={signOut}>Log Out</Box> : <Box as={'button'} onClick={signIn}>Log in</Box>}
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </HStack>

    </HStack >

}

export default Header;
