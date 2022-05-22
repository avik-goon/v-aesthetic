// noinspection SpellCheckingInspection

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PrimaryStack from "./src/Stacks/PrimaryStack";
import { NativeBaseProvider } from "native-base";
import theme from "./config/config.theme";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import AppLoading from "expo-app-loading";
Amplify.configure(awsmobile);
import {
  useFonts,
  LobsterTwo_400Regular,
  LobsterTwo_400Regular_Italic,
  LobsterTwo_700Bold,
  LobsterTwo_700Bold_Italic,
} from "@expo-google-fonts/lobster-two";

export default function App() {
  let [fontsLoaded] = useFonts({
    LobsterTwo_400Regular,
    LobsterTwo_400Regular_Italic,
    LobsterTwo_700Bold,
    LobsterTwo_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <PrimaryStack />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
