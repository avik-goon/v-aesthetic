import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const SignUp = () => {
  const [gender, setGender] = React.useState("male");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Stack direction={"column"} space={4}>
        <TextInputFields
          variant="rounded"
          placeholder="Full Name"
          borderColor={"primary.600"}
        />
        <TextInputFields
          variant="rounded"
          placeholder="Email"
          keyboardType="email-address"
          borderColor={"primary.600"}
        />
        <TextInputFields
          variant="rounded"
          placeholder="Phone Number"
          keyboardType="decimal-pad"
          borderColor={"primary.600"}
        />
        <PasswordInputField
          variant="rounded"
          placeholder="Password"
          borderColor={"primary.600"}
        />
        <PasswordInputField
          variant="rounded"
          placeholder="Re-type Password"
          borderColor={"primary.600"}
        />
        <Center w={"100%"}>
          <Box mt={-2}>
            <Select
              selectedValue={gender}
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
              onValueChange={(itemValue) => setGender(itemValue)}
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
            onPress={() => {}}
          >
            REGISTER
          </Button>
        </Center>
      </Stack>
    </TouchableWithoutFeedback>
  );
};
export default SignUp;
