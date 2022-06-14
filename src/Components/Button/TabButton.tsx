import { Box, Image, Text } from "native-base";
import React, { FC } from "react";
import { Alert, ImageSourcePropType, TouchableOpacity } from "react-native";
import { signOut } from "../../../worker/Auth/Auth-worker";
import useStore from "../../../store/store";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../Navigators/NavigationTypes/types";

function TabButton(
  currentTab: string,
  setCurrentTab: Function,
  title: string,
  image: ImageSourcePropType
) {
  const { loadingIndicator, setLoadingIndicator } = useStore();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === "LogOut") {
          setLoadingIndicator(!loadingIndicator);
          signOut().then((response) => {
            setLoadingIndicator(false);
            navigation.replace("Authentication");
          });
        } else {
          setCurrentTab(() => title);
        }
      }}
    >
      <Box
        flexDir={"row"}
        alignItems={"center"}
        paddingTop={"1.5"}
        paddingBottom={"1.5"}
        paddingLeft={"2"}
        paddingRight={"5"}
        backgroundColor={currentTab === title ? "white" : "transparent"}
        borderRadius={8}
        mt={"3"}
        ml={"2"}
      >
        <Image
          source={image}
          alt={"home image"}
          w={"5"}
          h={"5"}
          tintColor={currentTab == title ? "primary.600" : "white"}
        ></Image>
        <Text
          color={currentTab !== title ? "white" : "#000"}
          paddingLeft={"1"}
          fontSize={"md"}
          fontWeight="bold"
        >
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
export default TabButton;
