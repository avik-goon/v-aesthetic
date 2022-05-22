// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../Screens/Registration";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

export default App;
