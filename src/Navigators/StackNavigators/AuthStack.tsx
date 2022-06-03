// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "../../Screens/Authentication";
import DrawerRoutes from "../Drawers/PrimaryDrawer";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../NavigationTypes/types";
import Dashboard from "../../Screens/Dashboard";
const Stack = createStackNavigator<AuthStackParamList>();
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Home" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default AuthStack;
