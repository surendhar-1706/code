import { NativeBaseProvider, Box } from "native-base";
import Test from './components/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
const Stack = createNativeStackNavigator();
export default function App() {

  return (<NativeBaseProvider>
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <Test />

    </NavigationContainer>
  </NativeBaseProvider>
  );
}
