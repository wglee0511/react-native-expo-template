import React from "react";

import { View } from "react-native";

import Text from "@/components/Text";
import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";

const Home = () => (
  <View style={[globalStyles.defaultFlexContainer]}>
    <Text fontSize={24} fontWeight={600} color={COLORS.black}>
      Main
    </Text>
  </View>
);

export default Home;
