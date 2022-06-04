import React from "react";
import { Box, Center, Heading, HStack, Stack, Text } from "native-base";
import { reveneue_data, chartConfig } from "../../../../constants/dummy-data";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
//@ts-ignore
import { BoxShadow } from "react-native-shadow";
const PerDayRevenue = () => {
  return (
    <Stack mt={"3"}>
      <Box>
        <Heading fontSize={"lg"}>Sessions Alloted</Heading>
      </Box>
      <Box my={"3"}>
        <BoxShadow setting={shadowOpt}>
          <PieChart
            data={reveneue_data}
            width={screenWidth - 35}
            height={220}
            chartConfig={chartConfig}
            accessor={"counts"}
            backgroundColor={"#810022"}
            paddingLeft={"15"}
            center={[0, 0]}
            absolute
            style={{ borderRadius: 5 }}
          />
        </BoxShadow>
      </Box>
    </Stack>
  );
};
export default PerDayRevenue;
const shadowOpt = {
  width: screenWidth - 35,
  height: 220,
  color: "#171717",
  border: 2,
  radius: 10,
  opacity: 0.2,
  x: 8,
  y: 5,
  style: { marginVertical: 5 },
};
