import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'


const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerLeft: () => {
                        return <Text>Left</Text>
                    },
                    headerRight: () => {
                        return <Text>Right</Text>
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