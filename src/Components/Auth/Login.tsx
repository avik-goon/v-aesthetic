import * as React from "react";
import { Box, Stack, Center, Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import TextInputFields from "../FormInput/TextInputFields";
import PasswordInputField from "../FormInput/PasswordInputField";
import * as Animatable from "react-native-animatable";
import useStore from "../../../store/store";
// @ts-ignore
import { useValidation } from "react-native-form-validator";
import { Admin } from "../../../worker/Auth/Auth-worker";
const BORDER_COLOR = "primary.600";
import _, { set } from "lodash";
const Login = () => {
  const {
    userLoginInfo,
    setUserLoginInfo,
    setAuthStatus,
    isLoginBtnPressed,
    setIsLoginBtnPressed,
  } = useStore();
  const __onChange: Function = (value: string, formField: string) => {
    if (formField === "username") {
      setUserLoginInfo(value, undefined);
    } else {
      setUserLoginInfo(undefined, value);
    }
  };

  const { validate, isFieldInError, getErrorsInField, isFormValid } =
    useValidation({
      state: { ...userLoginInfo },
    });

  const _onPressButton = () => {
    validate({
      username: { email: true, required: true },
      password: {
        minlength: 6,
        required: true,
      },
    });
    if (isFormValid()) {
      setIsLoginBtnPressed(true);
      new Admin(userLoginInfo.username, userLoginInfo.password)
        .handleLogin()
        .then((response: any) => {
          setIsLoginBtnPressed(false);
          if (!_.has(response, "status")) {
            //no err
            setAuthStatus("Login Successfull, Redirecting", "success");
          } else {
            //err occured
            setAuthStatus("Login Unsuccessfull," + response.msg, "error");
          }
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Stack direction={"column"} space={4}>
        <TextInputFields
          variant="rounded"
          placeholder="E-Mail Address"
          borderColor={BORDER_COLOR}
          autoCapitalize="none"
          value={userLoginInfo.username}
          onChangeText={(value: string) => {
            __onChange(value, "username");
          }}
        />
        {isFieldInError("username") &&
          getErrorsInField("username").map(
            (errorMessage: string, index: Number) => (
              <Box key={index.toString()} marginY={-2.5}>
                <Animatable.Text
                  animation={"slideInLeft"}
                  style={styles.errText}
                >
                  {errorMessage}
                </Animatable.Text>
              </Box>
            )
          )}
        <PasswordInputField
          variant="rounded"
          placeholder="Password"
          borderColor={BORDER_COLOR}
          value={userLoginInfo.password}
          onChangeText={(value: string) => {
            __onChange(value, "password");
          }}
        />
        {isFieldInError("password") &&
          getErrorsInField("password").map(
            (errorMessage: string, index: Number) => (
              <Box key={index.toString()} marginY={-2.5}>
                <Animatable.Text
                  animation={"slideInLeft"}
                  style={styles.errText}
                >
                  {errorMessage}
                </Animatable.Text>
              </Box>
            )
          )}
        <Center
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          {!isLoginBtnPressed ? (
            <Button
              leftIcon={<Icon as={Ionicons} name="log-in-outline" size="lg" />}
              size={"lg"}
              colorScheme="primary"
              borderRadius={25}
              paddingLeft={10}
              paddingRight={10}
              onPress={_onPressButton}
            >
              LOGIN
            </Button>
          ) : (
            <Button
              size={"lg"}
              colorScheme="primary"
              borderRadius={25}
              paddingLeft={10}
              paddingRight={10}
              isLoading
              isDisabled
              isLoadingText="Please Wait"
            >
              LOGIN
            </Button>
          )}
        </Center>
      </Stack>
    </TouchableWithoutFeedback>
  );
};
export default Login;
const styles = StyleSheet.create({
  errText: {
    display: "flex",
    alignSelf: "flex-start",
    color: "#640000",
    marginLeft: 10,
    fontSize: 12,
    borderWidth: 0,
  },
});
