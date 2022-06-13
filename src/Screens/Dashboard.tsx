import React, { useRef, useState } from "react";
import { Box, Image, Pressable, Text, ScrollView } from "native-base";
import TabButton from "../Components/Button/TabButton";
import { Animated, View, Image as IMG, TouchableOpacity } from "react-native";
import {
  home_image,
  search_image,
  profile_image,
  notification_image,
  settings_image,
  logout_image,
  menu_btn_image,
  close_btn_image,
} from "../../constants/asset";
import Home from "./DasboardScreens/Home";
import Search from "./DasboardScreens/Search";
const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const handleOnPress = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
  };

  return (
    <Box
      flex={1}
      bgColor={"primary.600"}
      alignItems="flex-start"
      justifyContent={"flex-start"}
      safeArea
    >
      <Box justifyContent={"flex-start"} padding={"5"} mt={"0"}>
        <Image
          source={profile_image}
          alt={"Profile iamge"}
          w={60}
          h={60}
          borderRadius={10}
        ></Image>
        <Text fontSize={"md"} fontWeight={"bold"} color={"#fff"} mt={"0.5"}>
          V-Aesthatic
        </Text>
        <TouchableOpacity>
          <Text color={"#fff"}>View Profile</Text>
        </TouchableOpacity>
        <View
          style={{
            flexGrow: 1,
            marginTop: 30,
          }}
        >
          {
            //tab bar buttons
          }
          {TabButton(currentTab, setCurrentTab, "Home", home_image)}
          {TabButton(currentTab, setCurrentTab, "Search", search_image)}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Notifications",
            notification_image
          )}
          {TabButton(currentTab, setCurrentTab, "Settings", settings_image)}
        </View>
        <Box>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout_image)}
        </Box>
      </Box>
      {
        // Over lay view
      }
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "#fff",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          //menu button
        }
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleOnPress}>
              {showMenu ? (
                <Image
                  source={close_btn_image}
                  alt="menubtn"
                  w={"5"}
                  h={"5"}
                  tintColor="primary.600"
                  mt={"6"}
                  key="11"
                  ml={"3"}
                ></Image>
              ) : (
                <Image
                  source={menu_btn_image}
                  alt="menubtn"
                  w={"5"}
                  key="22"
                  h={"5"}
                  tintColor="primary.600"
                  mt={"6"}
                  ml={"3"}
                ></Image>
              )}
            </TouchableOpacity>
            <Text fontSize={"lg"} fontWeight={"bold"} pt={"6"} ml={"3"}>
              {currentTab}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              if (showMenu) handleOnPress();
            }}
          >
            <Box>
              {currentTab === "Home" && <Home />}
              {currentTab === "Search" && <Search />}
              {currentTab === "Settings" && <></>}
              {currentTab === "Notifications" && <></>}
            </Box>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </Box>
  );
};
export default Dashboard;
