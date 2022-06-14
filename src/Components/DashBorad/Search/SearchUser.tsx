import React, { FC, useEffect, useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Stack,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Keyboard } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Admin } from "../../../models";
import AdminInfo from "./AdminInfo";

const SearchUser: FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [adminData, setAdminData] = useState<any>([]);
  const getAllAdmin = async () => {
    return await DataStore.query(Admin);
  };
  useEffect(() => {
    getAllAdmin().then((_adminData) => {
      setAdminData(_adminData);
    });
  }, []);

  return (
    <ScrollView flexGrow={1}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <Box py={"3"}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search Admin"
              width="100%"
              borderRadius="25"
              borderColor={"primary.700"}
              py="3"
              px="1"
              fontSize="14"
              value={searchText}
              onChangeText={(value: any) => {
                setSearchText(value);
              }}
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="primary.400"
                  as={<MaterialIcons name="search" />}
                />
              }
              InputRightElement={
                <Pressable
                  _pressed={{ opacity: 5 }}
                  onPress={() => setSearchText("")}
                >
                  <Icon
                    m="2"
                    mr="3"
                    size="6"
                    color="secondary.200"
                    as={<MaterialIcons name="close" />}
                  />
                </Pressable>
              }
            />
          </VStack>
        </Box>
        <Box>
          {adminData.map((data: any, index: number) => {
            return (
              <VStack key={index.toString()} space={4}>
                <AdminInfo
                  fullName={data.fullName}
                  email={data.email}
                  residential_address={data.residential_address}
                  phone_number={data.phone_number}
                  office_name={data.office_name}
                  office_address={data.office_address}
                />
              </VStack>
            );
          })}
        </Box>
      </Pressable>
    </ScrollView>
  );
};

export default SearchUser;
