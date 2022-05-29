import React, { FC } from "react";
import { Input, Center, Button } from "native-base";
interface passwordFieldProps {
  isCenter?: boolean;
  variant: string;
  placeholder: string;
  borderColor: string;
  value?: any;
  onChangeText?: any;
}
const PasswordInputField: FC<passwordFieldProps> = (props) => {
  const { isCenter = true, variant, placeholder, borderColor } = props;
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  if (isCenter) {
    return (
      <>
        <Center w={"100%"}>
          <Input
            {...props}
            type={show ? "text" : "password"}
            variant="rounded"
            placeholder="Password"
            borderColor={"primary.600"}
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            }
          />
        </Center>
      </>
    );
  } else {
    return (
      <>
        <Input
          {...props}
          type={show ? "text" : "password"}
          variant="rounded"
          placeholder="Password"
          borderColor={"primary.600"}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              onPress={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          }
        />
      </>
    );
  }
};
export default PasswordInputField;
