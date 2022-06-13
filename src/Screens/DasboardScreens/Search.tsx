import React, { FC, useState } from "react";
import { Dimensions, Platform, StatusBar } from "react-native";
import {
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  SearchIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchUser from "../../Components/DashBorad/Search/SearchUser";
import AddUser from "../../Components/DashBorad/Search/AddUser";
const Search: FC = () => {
  const height = Dimensions.get("window").height;
  const lowerViewCalculatedHeight =
    Platform.OS === "ios" ? (height * 15) / 100 : (height * 11) / 100;
  const upperViewHeight = height - lowerViewCalculatedHeight;
  const lowerViewHeight = height - (height - lowerViewCalculatedHeight);
  const [visibleWindow, setVisibleWindow] = useState<
    "search-user" | "add-user"
  >("search-user");

  const __handleChange = (changeType: "search-user" | "add-user") => {
    setVisibleWindow(changeType);
  };
  console.log(visibleWindow);
  return (
    <Box minH={height} w={"100%"}>
      <Box maxH={upperViewHeight}>
        {visibleWindow === "search-user" && <SearchUser />}
        {visibleWindow === "add-user" && (
          <AddUser componentHeight={upperViewHeight} />
        )}
      </Box>
      <Box
        minH={lowerViewHeight}
        position={"absolute"}
        bottom={0}
        left={0}
        w={"100%"}
        mb={Platform.OS === "ios" ? 2 : 0}
        py={"2"}
        borderRadius={10}
      >
        <HStack>
          <Box
            w={"50%"}
            borderRightWidth={"0.25"}
            borderRightColor={"primary.800"}
          >
            <Center>
              <Pressable
                onPress={() => __handleChange("search-user")}
                _pressed={{ opacity: 5 }}
              >
                <Icon
                  as={MaterialIcons}
                  name="person-search"
                  color={"primary.600"}
                  size={"3xl"}
                />
              </Pressable>
            </Center>
          </Box>
          <Box w={"50%"}>
            <Center>
              <Pressable
                onPress={() => __handleChange("add-user")}
                _pressed={{ opacity: 5 }}
              >
                <Icon
                  as={MaterialIcons}
                  name="person-add"
                  color={"primary.600"}
                  size={"3xl"}
                />
              </Pressable>
            </Center>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Search;
