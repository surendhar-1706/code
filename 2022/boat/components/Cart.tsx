import { Box, Button, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillCloseCircle, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { empty_cart } from '../feautres/cartItemSlice'
import { cartvalue } from '../feautres/totalPriceSlice'
import { urlFor } from '../lib/client'

function Cart() {
    const cart_items = useSelector((state: RootState) => state.addtocart.product)
    const total_price = useSelector((state: RootState) => state.cart_total_price.total_price)
    const [total_cost, set_total_cost] = useState(0)
    const dispatch = useDispatch()

    var total = 0
    cart_items.map(async (cart_item: any) => {
        console.log(cart_item.product.price, cart_item.item)
        const wow = cart_item.product.price * cart_item.item
        console.log(wow)
        const wow2 = total + wow
        total = wow2
        // set_total_cost(wow2)

    })

    // set_total_cost(total)

    return (
        <Box sx={{
            position: 'relative',
            h: '96vh'
        }}>

            {
                cart_items.map((cart_item: any) => {
                    return (
                        <Box key={cart_item.product.name} display={'flex'} columnGap={10} py={4}>

                            <VStack>
                                <Box px={1} rounded={'xl'} bgColor={'blackAlpha.100'} height={'24'} width={'24'}><Image src={`${urlFor(cart_item.product.image[0])}`} /></Box>
                                <Text >Qty: {cart_item.item}</Text>
                            </VStack>
                            <Stack>
                                <Text fontWeight={'bold'} textColor={'blue.800'} >  {cart_item.product.name}</Text>

                                <Text fontWeight={'bold'} textColor={'red.600'}>Price: ${cart_item.product.price}</Text>
                                {/* <AiOutlineCloseCircle color='red' /> */}
                            </Stack>
                        </Box>
                    )
                })
            }
            {
                cart_items.length < 1 && <VStack pt={10} ><Text>Oops!! No Items In the Cart  :(</Text></VStack>
            }
            {
                cart_items.length > 0 && <VStack position={'absolute'} bottom={0}>
                    <Button onClick={() => {
                        dispatch(empty_cart())
                    }} >Emtpy Cart</Button>
                </VStack>
            }

            <VStack position={'absolute'} bottom={0} right={0}>

                <Text> ${
                    total_price
                }</Text>
            </VStack>

        </Box>
    )
}

export default Cart