import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../../Screens/Dashboard";
import { DrawerParam } from "../NavigationTypes/types";
const Drawer = createDrawerNavigator<DrawerParam>();

const PrimaryDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Dashboard} />
    </Drawer.Navigator>
  );
};
export default PrimaryDrawer;
