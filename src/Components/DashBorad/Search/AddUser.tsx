import React, { FC } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TextInputFields from "../../FormInput/TextInputFields";
import AvoidKeyborad from "../../AvoidKeyborad";
import { DataStore } from "@aws-amplify/datastore";
import { Admin } from "../../../models";
import { Alert } from "react-native";
type AddUserProps = {
  componentHeight: any;
};

const storeAdminDetailsToDatabase = async (adminDetails: any) => {
  try {
    const status = await DataStore.save(new Admin(adminDetails));
    console.log(status);
    return status;
  } catch (e) {
    console.log(e.message());
  }
};

const AddUser: FC<AddUserProps> = ({ componentHeight }) => {
  const [isLoginBtnPressed, setIsLoginBtnPressed] =
    React.useState<boolean>(false);
  const [adminInfo, setAdminInfo] = React.useState<{
    fullName: string;
    email: string;
    residential_address: string;
    phone_number: string;
    office_name: string;
    office_address: string;
  }>({
    fullName: "",
    email: "",
    residential_address: "",
    phone_number: "",
    office_name: "",
    office_address: "",
  });
  const _onPressButton = () => {
    setIsLoginBtnPressed(true);
    storeAdminDetailsToDatabase(adminInfo).then((r) => {
      if (r) {
        setIsLoginBtnPressed(false);
        Alert.alert("Data successfully created!");
        setAdminInfo({
          fullName: "",
          email: "",
          residential_address: "",
          phone_number: "",
          office_name: "",
          office_address: "",
        });
      }
    });
  };

  const _onChange: Function = (value: string | number, formField: string) => {
    setAdminInfo({ ...adminInfo, [formField]: value });
  };

  return (
    <ScrollView flexGrow={1}>
      <Pressable pt={"5"}>
        <VStack
          space={3}
          w={"90%"}
          alignSelf={"center"}
          p={"2.5"}
          borderWidth={"2"}
          borderColor={"primary.600"}
          borderRadius={15}
        >
          <Box>
            <Center>
              <Icon
                as={Ionicons}
                name="person-circle-outline"
                color={"primary.600"}
                size={"6xl"}
              />
            </Center>
          </Box>
          <Box>
            <Center>
              <Heading fontSize={"md"} color={"primary.700"}>
                Enter New Admin Details
              </Heading>
            </Center>
          </Box>
          <AvoidKeyborad>
            <Stack space={3} mt={2}>
              <TextInputFields
                variant={"rounded"}
                placeholder={"Full Name"}
                borderColor={"primary.700"}
                value={adminInfo.fullName}
                onChangeText={(value: string) => _onChange(value, "fullName")}
              />
              <TextInputFields
                variant={"rounded"}
                placeholder={"Email Address"}
                borderColor={"primary.700"}
                value={adminInfo.email}
                onChangeText={(value: string) => _onChange(value, "email")}
              />
              <TextInputFields
                variant={"rounded"}
                placeholder={"Residential Address"}
                borderColor={"primary.700"}
                value={adminInfo.residential_address}
                onChangeText={(value: string) =>
                  _onChange(value, "residential_address")
                }
              />
              <TextInputFields
                variant={"rounded"}
                placeholder={"Phone Number"}
                borderColor={"primary.700"}
                keyboardType={"decimal-pad"}
                maxLength={10}
                value={adminInfo.phone_number}
                onChangeText={(value: string) =>
                  _onChange(value, "phone_number")
                }
              />
              <TextInputFields
                variant={"rounded"}
                placeholder={"Office Name"}
                borderColor={"primary.700"}
                value={adminInfo.office_name}
                onChangeText={(value: string) =>
                  _onChange(value, "office_name")
                }
              />
              <TextInputFields
                variant={"rounded"}
                placeholder={"Office Address"}
                borderColor={"primary.700"}
                value={adminInfo.office_address}
                onChangeText={(value: string) =>
                  _onChange(value, "office_address")
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
          </AvoidKeyborad>
        </VStack>
      </Pressable>
    </ScrollView>
  );
};

export default AddUser;
