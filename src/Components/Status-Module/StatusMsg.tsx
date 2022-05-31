import * as React from "react";
import { Box, Text, Stack, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import useStore from "../../../store/store";
interface prop {
  msg: String;
  statusType: "success" | "info" | "error" | "warning" | undefined;
}
const StatusMsg: React.FC<prop> = ({ msg, statusType }): JSX.Element => {
  let bg_color = "red.800"; // for error
  let status_icon = "alert-outline"; // for error
  if (statusType === "success") {
    bg_color = "lime.900";
    status_icon = "check-outline";
  } else if (statusType === "info") {
    bg_color = "cyan.800";
    status_icon = "information-outline";
  } else if (statusType === "warning") {
    bg_color = "orange.700";
    status_icon = "alarm-light-outline";
  }
  const unSetStatus = useStore((state) => state.unsetauthStatus);
  const authStatus = useStore((state) => state.authStatus);

  React.useEffect(() => {
    setTimeout(() => {
      unSetStatus();
    }, 5000);
  }, [authStatus.statusType]);

  return (
    <Stack
      zIndex={9999}
      position={"absolute"}
      mt={30}
      w={"100%"}
      h={50}
      bgColor={bg_color}
      opacity={1}
      top={0}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box paddingLeft={2}>
        <Icon
          color={"white"}
          as={MaterialCommunityIcons}
          name={status_icon}
          size="md"
        />
      </Box>
      <Box minW={"80%"}>
        <Text
          color={"white"}
          fontFamily={"heading"}
          fontWeight={"bold"}
          fontSize={15}
          textAlign={"left"}
        >
          {msg}
        </Text>
      </Box>
      <Box mr={2}>
        <TouchableOpacity onPress={() => unSetStatus()}>
          <Icon
            color={"white"}
            as={MaterialCommunityIcons}
            name={"close-circle-outline"}
            size="md"
          />
        </TouchableOpacity>
      </Box>
    </Stack>
  );
};
export default StatusMsg;
