import React, { FC, useEffect, useState } from "react";
import { Box, Button, Center, Heading, Icon, Stack, Text } from "native-base";
import { Auth } from "aws-amplify";
import TextInputFields from "../../Components/FormInput/TextInputFields";
import { Ionicons } from "@expo/vector-icons";
import StatusMsg from "../../Components/Status-Module/StatusMsg";
import useStore from "../../../store/store";
import { Admin } from "../../../worker/Auth/Auth-worker";
import PasswordInputField from "../../Components/FormInput/PasswordInputField";

const Settings: FC = () => {
  const [currentUser, setCurrentUser] = useState<{
    username: "";
    current_password: string;
    new_password: string;
  }>({
    username: "",
    current_password: "",
    new_password: "",
  });
  const [isLoginBtnPressed, setIsLoginBtnPressed] = useState<boolean>(false);
  const { authStatus, setAuthStatus } = useStore();
  const _onPressButton = () => {
    if (
      currentUser.current_password.length < 6 ||
      currentUser.new_password.length < 6 ||
      currentUser.username.length < 3
    ) {
      setAuthStatus("Empty field can't be accepted", "error");
      return null;
    }
    setIsLoginBtnPressed(!isLoginBtnPressed);
    const admin_obj = new Admin(
      currentUser.username,
      currentUser.current_password
    );
    admin_obj.handleLogin().then((response) => {
      // @ts-ignore
      if (response === "SUCCESS") {
        admin_obj
          .changePassword(currentUser.new_password, setIsLoginBtnPressed)
          .then((response2) => {
            if (response2) {
              setIsLoginBtnPressed(false);
              setAuthStatus("Password Changed Successfully", "success");
              setCurrentUser((state) => ({
                ...state,
                current_password: "",
                new_password: "",
              }));
            } else {
              setIsLoginBtnPressed(false);
              setAuthStatus("Error Occurred, Nothing Changed", "error");
            }
          });
      } else {
        setIsLoginBtnPressed(false);
        setAuthStatus(response?.msg, "error");
      }
    });
  };

  useEffect(() => {
    getCurrentAuthenticatedUser().then((response) => {
      if (response?.username) {
        setCurrentUser((state) => ({ ...state, username: response?.username }));
      }
    });
  }, []);

  return (
    <>
      <Box mt={"3"}>
        {authStatus.msg !== undefined && (
          <Box zIndex={9999} h={85} w={"100%"}>
            <StatusMsg
              statusType={authStatus.statusType}
              msg={authStatus.msg}
            />
          </Box>
        )}

        <Stack
          borderWidth={1}
          borderColor={"primary.700"}
          borderRadius={10}
          p={"5"}
        >
          <Center pb={"3"} mt={"-2"}>
            <Heading fontSize={"sm"}>Change Password</Heading>
          </Center>
          <Stack space={"4"}>
            <TextInputFields
              variant={"rounded"}
              placeholder={"Username"}
              borderColor={"primary.600"}
              value={currentUser.username}
              //@ts-ignore
              isDisabled={true}
            />
            <PasswordInputField
              variant={"rounded"}
              placeholder={"Current Password"}
              borderColor={"primary.600"}
              value={currentUser.current_password}
              onChangeText={(value: string) =>
                setCurrentUser((state) => ({
                  ...state,
                  current_password: value,
                }))
              }
            />
            <PasswordInputField
              variant={"rounded"}
              placeholder={"New Password"}
              borderColor={"primary.600"}
              value={currentUser.new_password}
              onChangeText={(value: string) =>
                setCurrentUser((state) => ({
                  ...state,
                  new_password: value,
                }))
              }
            />
            <Center
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              alignSelf={"center"}
            >
              {!isLoginBtnPressed ? (
                <Button
                  leftIcon={
                    <Icon as={Ionicons} name="log-in-outline" size="lg" />
                  }
                  size={"lg"}
                  colorScheme="primary"
                  borderRadius={25}
                  paddingLeft={10}
                  paddingRight={10}
                  onPress={_onPressButton}
                >
                  SUBMIT
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
                  SUBMIT
                </Button>
              )}
            </Center>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Settings;
const getCurrentAuthenticatedUser = async () => {
  return await Auth.currentAuthenticatedUser();
};
