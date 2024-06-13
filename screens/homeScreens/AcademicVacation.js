import React from "react";
import { View, Text } from "react-native";
import { style } from "./StyleHomeScreens/style";
import Ionicons from "@expo/vector-icons/Ionicons";

const AcademicVacation = () => (
  <View style={style.vacation}>
    <Ionicons name="person" style={style.photo} />

    <Text style={style.vacationText}>Full student name</Text>
  </View>
);

export default AcademicVacation;
