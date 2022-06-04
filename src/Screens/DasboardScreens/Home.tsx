import React from "react";
import { Box, Text } from "native-base";
import Weather from "../../Components/DashBorad/Home/Weather";
const Home = () => {
  return (
    <Box>
      <Box py={"4"}>
        <Weather />
      </Box>
    </Box>
  );
};
export default Home;
