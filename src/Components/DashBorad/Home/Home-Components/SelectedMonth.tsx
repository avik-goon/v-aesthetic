import React, { FC, useEffect } from "react";

import SelectedDateRevenue from "../SelectedDateRevenue";
import { Box, Text } from "native-base";
const SelectedMonthRevenue: FC = () => {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  return (
    <Box>
      {show && (
        <Text color={"red.700"} fontSize={12} pb={3} textAlign={"center"}>
          Select any date of any month, only month and year will be taken date
          will be ignored
        </Text>
      )}
      <SelectedDateRevenue />
    </Box>
  );
};

export default SelectedMonthRevenue;
