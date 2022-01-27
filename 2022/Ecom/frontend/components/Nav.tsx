import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import { BiLogIn, BiUserPlus, BiCart, BiUser, BiSubdirectoryRight, BiMenu } from "react-icons/bi";
function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()
    const router = useRouter();
    return <div className='flex gap-3 items-center justify-between py-4 px-6'>
        <div className='uppercase font-bold text-2xl break-words'>
            la collection
        </div>
        <div className='hidden md:flex items-center text-lg gap-3 font-medium  '>
            <Link href="/">
                <a className={router.pathname == "/" ? "" : "text-gray-400"}>
                    Home
                </a>
            </Link >
            <Link href="/products">
                <a className={router.pathname == "/products" ? "active" : "text-gray-400"}>
                    Products
                </a>
            </Link>
            <Link href="/about">
                <a className={router.pathname == "/about" ? "active" : "text-gray-400"}>
                    About
                </a>
            </Link>
            <Link href="/contact">
                <a className={router.pathname == "/contact" ? "active" : "text-gray-400"}>
                    Contact
                </a>
            </Link>
        </div>
        <div className='hidden md:flex gap-4' >
            <div className=' '>

                <button className='h-10 flex items-center gap-2 border px-5 py-1 rounded-md hover:bg-gray-50 font-semibold'>
                    <BiLogIn />
                    <div>Login</div>
                </button>
            </div>
            <div>

                <button className='h-10 flex items-center gap-2 border px-5 py-1 rounded-md hover:bg-gray-50 font-semibold'>
                    <BiUser />
                    <div>Register</div>

                </button>
            </div>
            <div  >

                <button className='h-10 flex items-center gap-2 border px-5 py-1 rounded-md hover:bg-gray-50 font-semibold'>
                    <BiCart />
                    <div>Cart</div>

                </button>
            </div>
        </div>
        <div className='md:hidden lg:hidden'>
            <div>
                <BiMenu size={40} onClick={onOpen} />
            </div>
        </div>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='xs'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton mt='3' mx='5' border='none' />


                <VStack className='pt-4 '>
                    <Link href="/">
                        <a className={router.pathname == "/" ? "" : "text-gray-400"}>
                            Home
                        </a>
                    </Link >
                    <Link href="/products">
                        <a className={router.pathname == "/products" ? "active" : "text-gray-400"}>
                            Products
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? "active" : "text-gray-400"}>
                            About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.pathname == "/contact" ? "active" : "text-gray-400"}>
                            Contact
                        </a>
                    </Link>
                </VStack>


                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>;
}

export default Nav;
