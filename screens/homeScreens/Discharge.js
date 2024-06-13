import React from "react";
import { View, Text } from "react-native";
import { style } from "./StyleHomeScreens/style";

const Discharge = () => (
  <View style={style.container}>
    <Text style={style.text}>
      Based on your profile, this information is not relevant to your needs
    </Text>
  </View>
);

export default Discharge;