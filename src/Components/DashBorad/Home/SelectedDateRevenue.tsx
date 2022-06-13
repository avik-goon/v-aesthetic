import React, { FC, useState } from "react";
import { Box, Text, Pressable } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import useStore from "../../../../store/store";
import __date from "date-and-time";
import { revenue_data, chartConfig } from "../../../../constants/dummy-data";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
//@ts-ignore
import { BoxShadow } from "react-native-shadow";
const SelectedDateRevenue: FC = () => {
  const { date, setDate } = useStore();

  const [mode, setMode] = useState<any>("date");
  const [show, setShow] = useState(false);
  console.log(`mode = ${mode} show = ${show}`);
  const onChange = (event: { type: string }, selectedDate: any) => {
    if (event.type === "dismissed") {
      setShow(!show);
      return;
    }
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Box>
      <Pressable onPress={showDatepicker} _pressed={{ opacity: 5 }}>
        <Box
          borderWidth={1}
          borderRadius={25}
          borderColor={"primary.700"}
          px={3}
          py={Platform.OS === "ios" ? 1.5 : 2.5}
        >
          <Text>{__date.format(date, "ddd, MMM DD YYYY")}</Text>
        </Box>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={onChange}
        />
      )}
      <Box my={"3"}>
        <BoxShadow setting={shadowOpt}>
          <PieChart
            data={revenue_data}
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
    </Box>
  );
};

export default SelectedDateRevenue;
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
