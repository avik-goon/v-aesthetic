import React, { FC } from "react";
import { TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Icon,
  KeyboardAvoidingView,
  ScrollView,
  Select,
  Stack,
  useToast,
} from "native-base";
import TextInputFields from "../FormInput/TextInputFields";
import PasswordInputField from "../FormInput/PasswordInputField";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
// @ts-ignore
import { useValidation } from "react-native-form-validator";
import { NewAdmin } from "../../../worker/Auth/Auth-worker";
import AvoidKeyborad from "../AvoidKeyborad";
interface SignUpProp {
  otpViewModifier: Function;
  setLoginSwitch: Function;
}
const SignUp: FC<SignUpProp> = ({ otpViewModifier, setLoginSwitch }) => {
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const toast = useToast();
  const _onChange: Function = (value: string | number, formField: string) => {
    setUserInfo({ ...userInfo, [formField]: value });
  };
  const { validate, isFieldInError, getErrorsInField, isFormValid } =
    useValidation({
      state: { ...userInfo },
    });

  const _onPressButton = () => {
    Keyboard.dismiss();
    validate({
      fullName: { minlength: 3, maxlength: 30, required: true },
      email: { email: true, required: true },
      phone_number: {
        numbers: true,
        minlength: 10,
        maxlength: 11,
        required: true,
      },
      password: {
        minlength: 8,
        hasSpecialCharacter: true,
        hasUpperCase: true,
        hasLowerCase: true,
        hasNumber: true,
      },
      confirmPassword: {
        equalPassword: userInfo.password,
        required: true,
      },
    });
    if (isFormValid()) {
      new NewAdmin(
        userInfo.email,
        userInfo.password,
        userInfo.fullName,
        userInfo.email,
        userInfo.gender,
        userInfo.phone_number
      )
        .handleSignup()
        .then((awsUserData: any) => {
          if (awsUserData?.codeDeliveryDetails) {
            toast.show({
              title: "User Created",
              description:
                "OTP successfully sent to mobile no: " +
                awsUserData?.codeDeliveryDetails.Destination,
              duration: 5000,
            });
            otpViewModifier((state: any) => ({
              ...state,
              username: awsUserData?.username,
              isVisible: true,
            }));
            setUserInfo(() => ({
              fullName: "",
              email: "",
              phone_number: "",
              password: "",
              confirmPassword: "",
              gender: "male",
            }));
            setLoginSwitch(() => "login");
          } else if (awsUserData === "code resent successfully") {
            otpViewModifier((state: any) => ({
              ...state,
              username: awsUserData?.username,
              isVisible: true,
            }));
            setUserInfo(() => ({
              fullName: "",
              email: "",
              phone_number: "",
              password: "",
              confirmPassword: "",
              gender: "male",
            }));
            setLoginSwitch(() => "login");
          } else {
            toast.show({
              title: "Info",
              description: awsUserData,
              duration: 5000,
            });
          }
        });
    }
  };

  return (
    <AvoidKeyborad>
      <Stack direction={"column"} space={4}>
        <TextInputFields
          variant="rounded"
          placeholder="Full Name"
          borderColor={"primary.600"}
          value={userInfo.fullName}
          onChangeText={(value: string) => _onChange(value, "fullName")}
        />
        {isFieldInError("fullName") &&
          getErrorsInField("fullName").map(
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
    </AvoidKeyborad>
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
