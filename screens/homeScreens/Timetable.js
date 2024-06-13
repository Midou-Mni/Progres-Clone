import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./StyleHomeScreens/style";

const Timetable = () => (
  <View style={style.containerSemestre}>
    <View style={style.semestre}>
      <TouchableOpacity style={style.touch}>
        <Text style={style.semestreT}>semestre 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touch}>
        <Text style={style.semestreT}>semestre 2</Text>
      </TouchableOpacity>
    </View>

    <View style={style.containerText}>
      <Text style={style.text}>Timetable will be available soon</Text>
    </View>
  </View>
);

export default Timetable;
