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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Dimensions } from "react-native";
import Login from "../Components/Auth/Login";
import ErrorMsg from "../Components/Error-Module/ErrorMsg";
// @ts-ignore
import { useValidation } from "react-native-form-validator";

export default function Registration() {
  const video = React.useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [loginSwitch, setLoginSwitch] = React.useState("login");
  const [gender, setGender] = React.useState("male");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [authErr, setAuthErr] = React.useState("");
  const [superAdmin, setSuperAdmin] = React.useState({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    gender,
  });
  console.log(superAdmin);

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { ...superAdmin },
    });
  const _onPressButton = () => {
    validate({
      fullname: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      phone_number: { numbers: true },
      confirmPassword: { equalPassword: superAdmin.password },
    });
  };
  console.log(getErrorsInField());

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
      {authErr !== "" && <ErrorMsg errMSG={authErr} />}
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
              <Login />
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
                  <Input
                    type={show ? "text" : "password"}
                    variant="rounded"
                    placeholder="Password"
                    borderColor={"primary.600"}
                    onChangeText={(val) =>
                      setSuperAdmin({ ...superAdmin, password: val })
                    }
                    value={superAdmin.password}
                    InputRightElement={
                      <Button
                        size="xs"
                        rounded="none"
                        w="1/6"
                        h="full"
                        onPress={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    }
                  />
                </Center>
                <Center w={"100%"}>
                  <Input
                    type={"password"}
                    variant="rounded"
                    placeholder="Re-Type Password"
                    borderColor={"primary.600"}
                    value={superAdmin.confirmPassword}
                    onChangeText={(val) =>
                      setSuperAdmin({ ...superAdmin, confirmPassword: val })
                    }
                  />
                  {isFieldInError("confirmPassword") &&
                    getErrorsInField("confirmPassword").map(
                      (errorMessage: string, index: Number) => (
                        <Text style={styles.errText} key={index.toString()}>
                          {errorMessage}
                        </Text>
                      )
                    )}
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
                    onPress={_onPressButton}
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

const styles = StyleSheet.create({
  errText: {
    display: "flex",
    alignSelf: "flex-start",
    color: "#640000",
    marginLeft: 10,
    fontSize: 12,
  },
});
