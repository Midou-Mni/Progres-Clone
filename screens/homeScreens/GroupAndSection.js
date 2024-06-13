import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./StyleHomeScreens/style";

const GroupAndSection = () => (
  <View style={style.containerSemestre}>
    <View style={style.semestreGroup}>
      <TouchableOpacity style={style.touchGroup}>
        <Text style={style.groupT}>semestre 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touchGroup}>
        <Text style={style.groupT}>semestre 2</Text>
      </TouchableOpacity>
    </View>

    <View style={style.groupCard}>
      <View style={style.groupRow}>
        <Text style={style.groupText1}>Period</Text>
        <Text style={style.groupText2}>Semestre 1</Text>
      </View>
      <View style={style.groupRow}>
        <Text style={style.groupText1}>Section</Text>
        <Text style={style.groupText2}>section 1</Text>
      </View>
      <View style={style.groupRowBelow}>
        <Text style={style.groupText1}>Group</Text>
        <Text style={style.groupText2}>group 1</Text>
      </View>
    </View>
  </View>
);

export default GroupAndSection;
