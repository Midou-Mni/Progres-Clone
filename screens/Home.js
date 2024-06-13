import React from "react";
import { globalStyles } from "../styles/global";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import {
  Ionicons,
  FontAwesome6,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const logoImg = require("../images/logo.png");

function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "#e8e8e8" }}>
      <View style={globalStyles.container}>
        <Image source={logoImg} style={globalStyles.img} />
        <View style={globalStyles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Discharge")}
            style={globalStyles.card}
          >
            <FontAwesome name="file-text" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>DISCHARGE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Timetable")}
            style={globalStyles.card}
          >
            <Ionicons name="calendar" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Timetable</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("GroupAndSection")}
            style={globalStyles.card}
          >
            <FontAwesome6 name="user-group" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Group and section</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ExamSchedule")}
            style={globalStyles.card}
          >
            <Ionicons name="calendar" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Examen Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ExamenGrade")}
            style={globalStyles.card}
          >
            <FontAwesome5 name="graduation-cap" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Examen Grade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Assessment")}
            style={globalStyles.card}
          >
            <Ionicons name="pencil-outline" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Assessment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Pourcentage")}
            style={globalStyles.card}
          >
            <Ionicons name="pie-chart" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Pourcentage (%)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AcademicTranscript")}
            style={globalStyles.card}
          >
            <Ionicons name="folder-open" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Academic transcript</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Debts")}
            style={globalStyles.card}
          >
            <Ionicons name="calculator" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Debts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AcademicVacation")}
            style={globalStyles.card}
          >
            <FontAwesome name="file" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Academic vacation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Enrollment")}
            style={globalStyles.card}
          >
            <MaterialCommunityIcons name="inbox-full" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Enrollments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
