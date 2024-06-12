import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const logoImg = require("../images/logo.png");

function Home() {
  return (
    <ScrollView >
      <View style={globalStyles.container}>
        <Image source={logoImg} style={globalStyles.img} />

        <View style={globalStyles.cardContainer}>
          <TouchableOpacity style={globalStyles.card}>
            <FontAwesome name="file-text" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>DISCHARGE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="calendar" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Timetable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.card}>
            <FontAwesome6 name="user-group" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Group and section</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="calendar" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Examen Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <FontAwesome5 name="graduation-cap" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Examen Grade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="pencil-outline" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Assessment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="pie-chart" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Pourcentage (%)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="folder-open" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Academic transcript</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Ionicons name="calculator" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Debts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <FontAwesome name="file" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Academic vacation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <MaterialCommunityIcons name="inbox-full" size={22} color="white" />
            <Text style={globalStyles.cardTitle}>Enrollments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
