import { FC } from "react";
import { Box, Heading, HStack, VStack, Text } from "native-base";
type AdminInfoProps = {
  fullName: string;
  email: string;
  residential_address: string;
  phone_number: string;
  office_name: string;
  office_address: string;
};
const AdminInfo: FC<AdminInfoProps> = ({
  fullName,
  email,
  residential_address,
  phone_number,
  office_name,
  office_address,
}) => {
  return (
    <Box
      width={"100%"}
      my={"5"}
      borderWidth={"1"}
      p={"3"}
      borderColor={"primary.700"}
      borderRadius={10}
    >
      <HStack space={"3"}>
        <VStack>
          <Heading size={"sm"}>Full Name: </Heading>
          <Heading size={"sm"}>Email ID: </Heading>
          <Heading size={"sm"}>Residential Address: </Heading>
          <Heading size={"sm"}>Phone number: </Heading>
          <Heading size={"sm"}>Office Name: </Heading>
          <Heading size={"sm"}>Office Address: </Heading>
        </VStack>
        <VStack>
          <Heading size={"sm"} fontWeight={"normal"}>
            {fullName}
          </Heading>
          <Heading size={"sm"} fontWeight={"normal"}>
            {email}
          </Heading>
          <Heading size={"sm"} fontWeight={"normal"}>
            {residential_address}
          </Heading>
          <Heading size={"sm"} fontWeight={"normal"}>
            {phone_number}
          </Heading>
          <Heading size={"sm"} fontWeight={"normal"}>
            {office_name}
          </Heading>
          <Heading size={"sm"} fontWeight={"normal"}>
            {office_address}
          </Heading>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AdminInfo;
