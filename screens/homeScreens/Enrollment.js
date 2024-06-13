import React from "react";
import { View, Text } from "react-native";
import { style } from "./StyleHomeScreens/style";

const Enrollment = () => (
  <View style={style.enrollment}>
    <Text style={style.t}>2023 / 2024</Text>
    <View style={style.eContainer}>
        <View style={style.eField}>
            <Text style={style.gradeText1}>University</Text>
            <Text style={style.eText}>University batna 2</Text>
        </View>
        <View style={style.eField}>
            <Text style={style.gradeText1}>Cycle</Text>
            <Text style={style.eText}>Lisence</Text>
        </View>
        <View style={style.eFieldBelow}>
            <Text style={style.gradeText1}>Level</Text>
            <Text style={style.eText}> lisence 1st year</Text>
        </View>
    </View>
    <View style={style.eContainer}>
        <View style={style.eField}>
            <Text style={style.gradeText1}>Fieald</Text>
            <Text style={style.eText}>Computer Science</Text>
        </View>
        <View style={style.eFieldBelow}>
            <Text style={style.gradeText1}>Major</Text>
            <Text style={style.eText}>Computer Science</Text>
        </View>
    </View>
  </View>
);

export default Enrollment;
