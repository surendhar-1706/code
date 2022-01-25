import React, { useRef } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'
function Cartbutton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<any>()
    return <div>
        <button ref={btnRef} onClick={onOpen}><BsFillCartPlusFill /></button>

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Cart Items</DrawerHeader>

                <DrawerBody>

                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>;
}

export default Cartbutton;
