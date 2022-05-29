import * as React from "react";
import { Box, Button, Icon, Text } from "native-base";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions, View } from "react-native";
import Login from "../Components/Auth/Login";
import ErrorMsg from "../Components/Error-Module/ErrorMsg";
// @ts-ignore
import SignUp from "../Components/Auth/SignUp";
import TextInputFields from "../Components/FormInput/TextInputFields";
import * as Animatable from "react-native-animatable";
import { validateOTP } from "../../worker/Auth/Auth-worker";
export default function Registration() {
  const video = React.useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [loginSwitch, setLoginSwitch] = React.useState("login");
  const [authErr, setAuthErr] = React.useState("");
  const [otpView, setOtpView] = React.useState({
    username: "",
    isVisible: false,
  });
  const [otp, setOTP] = React.useState("");
  console.log(otpView);

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
      {otpView.isVisible && (
        <Animatable.View animation={"slideInDown"} style={styles.otpfield}>
          <Text fontFamily={"heading"} textAlign="center" mb={2}>
            ENTER OTP
          </Text>
          <TextInputFields
            value={otp}
            maxLength={6}
            borderColor="primary.600"
            placeholder="OTP"
            variant="rounded"
            onChangeText={(value: number) => setOTP((otp) => value)}
          />
          <Button
            marginTop={3}
            size={"sm"}
            colorScheme="pink"
            borderRadius={25}
            paddingLeft={10}
            paddingRight={10}
            onPress={() => {
              validateOTP(otpView.username, otp.toString()).then((response) => {
                setOtpView({ ...otpView, isVisible: false, username: "" });
                if (response === "SUCCESS") {
                } else {
                  setAuthErr(response);
                }
              });
            }}
          >
            SUBMIT
          </Button>
        </Animatable.View>
      )}
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
              //register user
              <SignUp otpViewModifier={setOtpView} />
            )}
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
}
const styles = StyleSheet.create({
  otpfield: {
    zIndex: 22222,
    position: "absolute",
    top: 30,
    width: "100%",
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
});
