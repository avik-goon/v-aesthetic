import React from "react";
import { Box, Divider, Heading, HStack, ScrollView, Spacer } from "native-base";
import Weather from "../../Components/DashBorad/Home/Weather";
import PerDayRevenue from "../../Components/DashBorad/Home/PerDayRevenue";
import SelectField from "../../Components/DashBorad/Home/Home-Components/SelectField";
import useStore from "../../../store/store";
const Home = () => {
  const { sessionFilter } = useStore();
  return (
    <Box>
      <Box py={"4"}>
        <Weather />
      </Box>
      <Divider my={2} />
      <Box my={2}>
        <Box>
          <Heading fontSize={"lg"}>Sessions Alloted</Heading>
        </Box>
        <SelectField />
        {sessionFilter === "today" && <PerDayRevenue />}
      </Box>
    </Box>
  );
};
export default Home;
