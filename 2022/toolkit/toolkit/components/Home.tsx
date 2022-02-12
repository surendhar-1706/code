import { Box, Button, Divider, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addcustomer, addcustomerfood } from '../features/customerSlice'
import { add, remove } from '../features/reservation'
import { RootState } from '../store'
import Reservationcard from './Reservationcard'
function MainComponent() {
    const [name, setname] = useState<any | string>()
    const reservation = useSelector((state: RootState) => state.reservation.value)
    const customers = useSelector((state: RootState) => state.customer.value)
    const [food, setfood] = useState<string>('')
    const dispatch = useDispatch()
    return (
        <div>

            <form onSubmit={
                (event: React.FormEvent<HTMLInputElement>) => {
                    event.preventDefault()
                    console.log(name, 'from submit')
                    dispatch(add(name))
                    dispatch(addcustomer({
                        id: name,
                        name: name,
                        food: []

                    }))
                    setname('')

                }
            }>

                <Input
                    value={name}
                    placeholder='Name of the people for reservation'
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setname(event.currentTarget.value)
                        // console.log(name)
                    }}
                />
                <Button type='submit'>Submit button</Button>

            </form>
            <Reservationcard />
            <Divider />
            {reservation.map((data, index) => {
                return <VStack><Box>{data}</Box>
                    <Button onClick={() => dispatch(remove(index))}>Remove</Button>

                </VStack>
            })}
            <Divider />
            {customers.map((customer, index) => {
                console.log(customer)
                return (
                    <HStack>
                        <VStack>
                            <Text>{customer.id}</Text>
                            <VStack>

                                {customer.food.map(i => <Text>{i}</Text>)}
                            </VStack>
                        </VStack>
                        <Input value={food} placeholder='enter your preferred food' onChange={(e) => { setfood(e.target.value) }} />
                        <Button onClick={() => {
                            dispatch(addcustomerfood({
                                id: customer.name,
                                food: food
                            }))
                        }}>Add</Button>
                    </HStack>
                )
            })}
        </div >
    )
}

export default MainComponent