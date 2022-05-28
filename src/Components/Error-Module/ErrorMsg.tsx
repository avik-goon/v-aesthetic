import * as React from "react";
import { Box, Text, Stack, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface prop {
  errMSG: String;
}
const ErrorMsg: React.FC<prop> = ({ errMSG }): JSX.Element => {
  console.log(errMSG);

  return (
    <Stack
      zIndex={9999}
      position={"absolute"}
      mt={30}
      w={"100%"}
      h={50}
      bgColor={"red.800"}
      opacity={1}
      top={0}
      direction={"row"}
      alignItems={"center"}
      space={2}
    >
      <Box paddingLeft={2}>
        <Icon
          color={"white"}
          as={MaterialCommunityIcons}
          name="alert-outline"
          size="md"
        />
      </Box>
      <Box>
        <Text
          color={"white"}
          fontFamily={"heading"}
          fontWeight={"bold"}
          fontSize={15}
        >
          This is a error message
        </Text>
      </Box>
    </Stack>
  );
};
export default ErrorMsg;
