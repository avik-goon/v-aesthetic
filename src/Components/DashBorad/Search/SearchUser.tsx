import React, { FC } from "react";
import { Box, Pressable, ScrollView, Text } from "native-base";

const SearchUser: FC = () => {
  const a = new Array(500);
  return (
    <ScrollView flexGrow={1}>
      <Pressable>
        <Text> In search file </Text>
      </Pressable>
    </ScrollView>
  );
};

export default SearchUser;
