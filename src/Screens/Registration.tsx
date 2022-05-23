import * as React from "react";
import {
  Box,
  Text,
  Input,
  Stack,
  Center,
  Button,
  Icon,
  Select,
  CheckIcon,
} from "native-base";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions } from "react-native";

export default function Registration() {
  const video = React.useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [loginSwitch, setLoginSwitch] = React.useState("login");
  const [gender, setGender] = React.useState("male");
  return (
    <Box flex={1} justifyContent={"center"}>
      <Video
        ref={video}
        style={{
          flex: 1,
          zIndex: -1,
        }}
        source={require("../../assets/pexels-ivan-samkov-6207541.mp4")}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay={true}
        isMuted={true}
      />

      <Box
        zIndex={1}
        position={"absolute"}
        w={windowWidth}
        h={windowHeight + 50}
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.3}
        backgroundColor={"black"}
        padding={0}
        margin={0}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box
          position={"absolute"}
          w={windowWidth}
          h={loginSwitch === "register" ? windowHeight / 2 : windowHeight / 2.5}
          flexDir={"row"}
          backgroundColor={"white"}
          opacity={1}
          justifyContent={"center"}
          alignSelf={"center"}
          bottom={0}
          zIndex={999}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        >
          <Stack
            alignSelf={"center"}
            direction="column"
            space="4"
            w={"95%"}
            alignItems={"center"}
            justifyContent={"center"}
            p={5}
          >
            <Box flexDir={"row"} w="100%" pb={2}>
              <Box w={"50%"} alignItems={"center"}>
                <TouchableOpacity
                  onPress={() => {
                    setLoginSwitch("login");
                  }}
                >
                  <Text
                    fontSize={"lg"}
                    color={loginSwitch === "login" ? "primary.500" : "pink.500"}
                    fontFamily={"heading"}
                  >
                    Log-In
                  </Text>
                </TouchableOpacity>
              </Box>
              <Box w={"50%"} alignItems={"center"} borderLeftWidth={1}>
                <TouchableOpacity
                  onPress={() => {
                    setLoginSwitch("register");
                  }}
                >
                  <Text
                    fontSize={"lg"}
                    color={
                      loginSwitch === "register" ? "secondary.500" : "pink.500"
                    }
                    fontFamily={"heading"}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </Box>
            </Box>
            {loginSwitch === "login" ? (
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
                      leftIcon={
                        <Icon as={Ionicons} name="log-in-outline" size="lg" />
                      }
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
            ) : (
              //register codes
              <Stack space={4}>
                <Center w={"100%"}>
                  <Input
                    variant="rounded"
                    placeholder="Full Name"
                    borderColor={"primary.600"}
                  />
                </Center>
                <Center w={"100%"}>
                  <Input
                    variant="rounded"
                    placeholder="Email"
                    keyboardType="email-address"
                    borderColor={"primary.600"}
                  />
                </Center>
                <Center w={"100%"}>
                  <Input
                    variant="rounded"
                    placeholder="Phone Number"
                    keyboardType="decimal-pad"
                    borderColor={"primary.600"}
                  />
                </Center>
                <Center w={"100%"}>
                  <Box mt={-2}>
                    <Select
                      selectedValue={gender}
                      minWidth="100%"
                      borderRadius={25}
                      accessibilityLabel="Choose Gender"
                      placeholder="Choose Gender"
                      borderColor={"primary.600"}
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) => setGender(itemValue)}
                    >
                      <Select.Item label="Male" value="male" />
                      <Select.Item label="Female" value="female" />
                    </Select>
                  </Box>
                </Center>
                <Center
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignSelf={"center"}
                >
                  <Button
                    leftIcon={
                      <Icon as={Ionicons} name="md-save-outline" size="md" />
                    }
                    size={"lg"}
                    colorScheme="primary"
                    borderRadius={25}
                    paddingLeft={10}
                    paddingRight={10}
                  >
                    REGISTER
                  </Button>
                </Center>
              </Stack>
            )}
          </Stack>
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
}

//const styles = StyleSheet.create({});
