import React from "react";
import { Box, Divider, HStack, ScrollView, Spacer } from "native-base";
import Weather from "../../Components/DashBorad/Home/Weather";
import PerDayRevenue from "../../Components/DashBorad/Home/PerDayRevenue";
const Home = () => {
  return (
    <Box>
      <Box py={"4"}>
        <Weather />
      </Box>
      <Divider my={2} />
      <ScrollView my={2} flexGrow={1}>
        <Box>
          <PerDayRevenue />
        </Box>
      </ScrollView>
    </Box>
  );
};
export default Home;
