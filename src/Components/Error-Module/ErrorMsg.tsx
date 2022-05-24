import * as React from "react";
import { Box, Text, Stack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
const ErrorMsg = () => {
  return (
    <Stack
      position={"absolute"}
      mt={30}
      w={"100%"}
      h={50}
      bgColor={"red.500"}
      opacity={1}
      top={0}
      direction={"row"}
      alignItems={"center"}
      space={2}
    >
      <Box paddingLeft={2}>
        <Icon
          color={"white"}
          as={MaterialIcons}
          name="error-outline"
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
