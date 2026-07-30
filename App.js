import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./Screens/ScreenA"
import ScreenB from "./Screens/ScreenB";
import react from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
       <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Screen A"
            component={ScreenA}
            options={{headerShown: false}}/>

          <Stack.Screen 
            name="Screen B"
            component={ScreenB}
            options={{headerShown: false}}/>

        </Stack.Navigator>
       </NavigationContainer>

  );
}