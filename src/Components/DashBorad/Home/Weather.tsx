import React, { useEffect, useState, useRef } from "react";
import { Box, HStack, Center, Heading, Text } from "native-base";
import * as Location from "expo-location";
import getWeatherDataAsJSON from "../../../../worker/API/WeatherApi";
import { Image } from "react-native";
function truncate(source: string | undefined, size: number) {
  // @ts-ignore
  if (source.length > size) {
    return source?.slice(0, size - 1) + "…";
  } else {
    return source;
  }
}
const Weather = () => {
  const [location, setLocation] = useState<object>({});
  const [weatherData, setWeatherData] = useState<{
    icon: string | undefined;
    temp: string | undefined;
    loc: string | undefined;
  }>({
    icon: undefined,
    temp: undefined,
    loc: undefined,
  });
  const [errorMsg, setErrorMsg] = useState<string>();
  const componentMounted = useRef(true);
  useEffect(() => {
    if (componentMounted.current) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        if (location?.coords.latitude && location?.coords.longitude) {
          const __weatherData = await getWeatherDataAsJSON(
            location.coords.latitude,
            location.coords.longitude
          );
          setWeatherData({
            icon: "https:" + __weatherData?.current.condition.icon,
            temp: __weatherData?.current.temp_c,
            loc: __weatherData?.location.name,
          });
        }
      })();
    }

    return () => {
      componentMounted.current = false;
      setWeatherData({
        icon: undefined,
        temp: undefined,
        loc: undefined,
      });
    };
  }, []);
  React.useEffect(() => {
    let locationName: string | undefined = weatherData.loc;
    let trimmedLocationName: string | undefined = undefined;
    // @ts-ignore
    if (locationName?.length >= 13) {
      trimmedLocationName = truncate(locationName, 13);
      setWeatherData((state) => ({ ...state, loc: trimmedLocationName }));
    }
  }, [weatherData.loc]);
  return (
    <HStack>
      <Center w={"1/2"}>
        <Heading alignSelf={"flex-start"} ml={"2"}>
          Wellcome,
        </Heading>
        <Text fontSize={"lg"}>Samiran Sir</Text>
      </Center>
      <Center w={"1/2"}>
        {weatherData?.icon && (
          <Box>
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Image
                source={{ uri: weatherData.icon }}
                style={{ width: 64, height: 64, tintColor: "#ab3d06" }}
              ></Image>
              <Box p={0}>
                <Text
                  p={0}
                  fontSize={"2xl"}
                  fontFamily={"heading"}
                  fontWeight={"bold"}
                  color="secondary.600"
                >
                  {weatherData.temp}
                  {"\u00b0"}C
                </Text>
                <Text color={"secondary.600"}>{weatherData.loc}</Text>
              </Box>
            </HStack>
          </Box>
        )}
      </Center>
    </HStack>
  );
};
export default Weather;
