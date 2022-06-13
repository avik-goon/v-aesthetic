import React from "react";
import { Box, Divider, Heading, HStack, ScrollView, Text } from "native-base";
import Weather from "../../Components/DashBorad/Home/Weather";
import PerDayRevenue from "../../Components/DashBorad/Home/PerDayRevenue";
import SelectField from "../../Components/DashBorad/Home/Home-Components/SelectField";

import useStore from "../../../store/store";
import SelectedDateRevenue from "../../Components/DashBorad/Home/SelectedDateRevenue";
import SelectedMonthRevenue from "../../Components/DashBorad/Home/Home-Components/SelectedMonth";

const Home = () => {
  const { sessionFilter, setSessionFilter } = useStore();
  return (
    <Box>
      <Box py={"4"}>
        <Weather />
      </Box>
      <Divider my={2} />
      <Box my={2}>
        <Box>
          <Heading fontSize={"lg"}>Sessions Allotted</Heading>
        </Box>
        <SelectField />
        {sessionFilter === "today" && <PerDayRevenue />}
        {sessionFilter === "this month" && <SelectedMonthRevenue />}
        {sessionFilter === "by date" && <SelectedDateRevenue />}
      </Box>
    </Box>
  );
};
export default Home;
