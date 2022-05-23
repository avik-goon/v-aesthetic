import * as React from "react";
import { Input, Stack, Center, Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Stack direction={"column"} space={4}>
        <Center w={"100%"}>
          <Input
            variant="rounded"
            placeholder="Username"
            borderColor={"primary.600"}
          />
        </Center>
        <Center w={"100%"}>
          <Input
            variant="rounded"
            placeholder="Password"
            borderColor={"primary.600"}
          />
        </Center>
        <Center
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Button
            leftIcon={<Icon as={Ionicons} name="log-in-outline" size="lg" />}
            size={"lg"}
            colorScheme="primary"
            borderRadius={25}
            paddingLeft={10}
            paddingRight={10}
          >
            LOGIN
          </Button>
        </Center>
      </Stack>
    </TouchableWithoutFeedback>
  );
};
export default Login;
