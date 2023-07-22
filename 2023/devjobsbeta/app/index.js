import LeftButton from '@devjobs/components/home/LeftButton'
import RightButton from '@devjobs/components/home/RightButton'
import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'


const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => {
                        return <LeftButton />
                    },
                    headerRight: () => {
                        return <RightButton />
                    },
                    headerTitle: () => (<Text></Text>)
                }}
            >

            </Stack.Screen>
            <ScrollView>
                <View>
                    <Text>Hello world</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home