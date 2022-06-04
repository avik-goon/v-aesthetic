import React, { useEffect, useState } from "react";
import { Box, HStack, Center, Heading, Text } from "native-base";
import * as Location from "expo-location";

const Weather = () => {
  const [location, setLocation] = useState<object>({});
  const [errorMsg, setErrorMsg] = useState<string>();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  console.log(location);

  return (
    <HStack>
      <Center w={"1/2"}>
        <Heading alignSelf={"flex-start"} ml={"2"}>
          Wellcome,
        </Heading>
        <Text>Samiran Sir</Text>
      </Center>
      <Center w={"1/2"}></Center>
    </HStack>
  );
};
export default Weather;
