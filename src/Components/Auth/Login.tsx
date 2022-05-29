import * as React from "react";
import { Box, Stack, Center, Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import TextInputFields from "../FormInput/TextInputFields";
import PasswordInputField from "../FormInput/PasswordInputField";
import * as Animatable from "react-native-animatable";
// @ts-ignore
import { useValidation } from "react-native-form-validator";
const BORDER_COLOR = "primary.600";
const Login = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    username: "",
    password: "",
  });

  const __onChange: Function = (value: string | number, formField: string) => {
    setLoginInfo((loginInfo) => ({ ...loginInfo, [formField]: value }));
  };

  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: { ...loginInfo },
  });

  const _onPressButton = () => {
    validate({
      username: { email: true, required: true },
      password: {
        minlength: 6,
        hasSpecialCharacter: true,
        hasUpperCase: true,
        hasLowerCase: true,
        required: true,
      },
    });
    console.log(isFormValid());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Stack direction={"column"} space={4}>
        <TextInputFields
          variant="rounded"
          placeholder="Username"
          borderColor={BORDER_COLOR}
          autoCapitalize="none"
          value={loginInfo.username}
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
          value={loginInfo.password}
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
