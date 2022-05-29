import * as React from "react";
import { Box, Text } from "native-base";
import { Video } from "expo-av";
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
import SignUp from "../Components/Auth/SignUp";

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
          <Box
            alignSelf={"center"}
            flex-dir="column"
            alignItems={"center"}
            justifyContent={"center"}
            p={5}
          >
            <Box flexDir={"row"} w="100%" pb={5}>
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
              <SignUp />
            )}
          </Box>
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
