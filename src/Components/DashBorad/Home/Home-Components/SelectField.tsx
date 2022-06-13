import React from "react";
import { Box, Center, CheckIcon, Select, Text } from "native-base";
import useStore, { store } from "../../../../../store/store";
const SelectField = () => {
  const { sessionFilter, setSessionFilter } = useStore();

  const _onChange: Function = (value: store["sessionFilter"]) => {
    setSessionFilter(value);
  };
  return (
    <Box my={3}>
      <Center>
        <Select
          selectedValue={sessionFilter}
          minWidth="100%"
          borderRadius={25}
          accessibilityLabel="Filter By"
          borderColor={"primary.600"}
          _selectedItem={{
            bg: "primary.100",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => _onChange(itemValue)}
        >
          <Select.Item label="Today" value={"today"} />
          <Select.Item label="Select a Month" value="this month" />
          <Select.Item label="Select a date" value="by date" />
        </Select>
      </Center>
    </Box>
  );
};
export default SelectField;
