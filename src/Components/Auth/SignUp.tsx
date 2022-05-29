import React from "react";
import { TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Icon,
  Select,
  Stack,
  Text,
} from "native-base";
import TextInputFields from "../FormInput/TextInputFields";
import PasswordInputField from "../FormInput/PasswordInputField";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
// @ts-ignore
import { useValidation } from "react-native-form-validator";
const SignUp = () => {
  const [userInfo, setUserInfo] = React.useState({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  console.log(userInfo);
  const _onChange: Function = (value: string | number, formField: string) => {
    setUserInfo({ ...userInfo, [formField]: value });
  };
  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: { ...userInfo },
  });

  const _onPressButton = () => {
    validate({
      fullname: { minlength: 3, maxlength: 7, required: true },
      email: { email: true, required: true },
      phone_number: {
        numbers: true,
        minlength: 10,
        maxlength: 11,
        required: true,
      },
      password: {
        minlength: 6,
        hasSpecialCharacter: true,
        hasUpperCase: true,
        hasLowerCase: true,
      },
      confirmPassword: {
        equalPassword: userInfo.password,
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
          placeholder="Full Name"
          borderColor={"primary.600"}
          value={userInfo.fullname}
          onChangeText={(value: string) => _onChange(value, "fullname")}
        />
        {isFieldInError("fullname") &&
          getErrorsInField("fullname").map(
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
        <TextInputFields
          variant="rounded"
          placeholder="Email"
          keyboardType="email-address"
          borderColor={"primary.600"}
          value={userInfo.email}
          autoCapitalize="none"
          onChangeText={(value: string) => _onChange(value, "email")}
        />
        {isFieldInError("email") &&
          getErrorsInField("email").map(
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
        <TextInputFields
          variant="rounded"
          placeholder="Phone Number"
          keyboardType="decimal-pad"
          borderColor={"primary.600"}
          value={userInfo.phone_number}
          onChangeText={(value: string) => _onChange(value, "phone_number")}
        />
        {isFieldInError("phone_number") &&
          getErrorsInField("phone_number").map(
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
          borderColor={"primary.600"}
          value={userInfo.password}
          onChangeText={(value: string) => _onChange(value, "password")}
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

        <PasswordInputField
          variant="rounded"
          placeholder="Re-type Password"
          borderColor={"primary.600"}
          value={userInfo.confirmPassword}
          onChangeText={(value: string) => _onChange(value, "confirmPassword")}
        />

        {isFieldInError("confirmPassword") &&
          getErrorsInField("confirmPassword").map(
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
        <Center w={"100%"}>
          <Box mt={-2}>
            <Select
              selectedValue={userInfo.gender}
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
              onValueChange={(itemValue) => _onChange(itemValue, "gender")}
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
            leftIcon={<Icon as={Ionicons} name="md-save-outline" size="md" />}
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
    </TouchableWithoutFeedback>
  );
};
export default SignUp;
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
