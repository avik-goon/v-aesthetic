import React, { FC } from "react";
import { Box, Icon, Image, Stack, Text } from "native-base";
import { Dimensions } from "react-native";
import { no_notification_image } from "../../../constants/asset";
import { Entypo } from "@expo/vector-icons";
const Notification: FC = () => {
  const height = Dimensions.get("window").height;
  return (
    <Box height={height} justifyContent={"center"} alignItems={"center"}>
      <Stack space={"3"}>
        <Icon as={Entypo} name="emoji-sad" color={"primary.600"} size={"6xl"} />
        <Text textAlign={"center"} ml={-3} color={"primary.600"}>
          {" "}
          No Notifications{" "}
        </Text>
      </Stack>
    </Box>
  );
};

export default Notification;
