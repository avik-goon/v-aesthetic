import React, { FC } from "react";
import { Center, Input } from "native-base";
interface textFieldProps {
  variant: string;
  placeholder: string;
  borderColor: string;
  isCenter?: boolean;
  autoCapitalize?: "none" | any;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
}
const TextInputFields: FC<textFieldProps> = (props) => {
  const {
    variant,
    placeholder,
    borderColor,
    isCenter = true,
    keyboardType = "default",
  } = props;
  return (
    <>
      {isCenter ? (
        <Center w={"100%"}>
          <Input
            {...props}
            variant={variant}
            placeholder={placeholder}
            borderColor={borderColor}
            keyboardType={keyboardType}
          />
        </Center>
      ) : (
        <Input
          variant={variant}
          placeholder={placeholder}
          borderColor={borderColor}
        />
      )}
    </>
  );
};
export default TextInputFields;
