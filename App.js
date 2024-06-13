import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "@expo/vector-icons/Ionicons";
import { globalStyles } from "./styles/global";

import Home from "./screens/Home";
import News from "./screens/News";
import Profile from "./screens/Profile";
import Cards from "./screens/Cards";
// ========================================
// Home Screens
import Discharge from "./screens/homeScreens/Discharge";
import Timetable from "./screens/homeScreens/Timetable";
import GroupAndSection from "./screens/homeScreens/GroupAndSection";
import ExamSchedule from "./screens/homeScreens/ExamSchedule";
import ExamenGrade from "./screens/homeScreens/ExamenGrade";
import Assessment from "./screens/homeScreens/Assessment";
import Pourcentage from "./screens/homeScreens/Pourcentage";
import AcademicTranscript from "./screens/homeScreens/AcademiTranscript";
import Debts from "./screens/homeScreens/Debts";
import AcademicVacation from "./screens/homeScreens/AcademicVacation";
import Enrollment from "./screens/homeScreens/Enrollment";
import { style } from "./screens/homeScreens/StyleHomeScreens/style";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#4b9b81",
          height: 130,
        },
        headerTitleStyle: { fontWeight: "900", fontSize: 24 },
        headerTintColor: "white",
        headerBackImage: (props) => <CustomBackButton {...props} />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Student Portal",
          headerTitleAlign: "start",
          headerStyle: {
            backgroundColor: "#e8e8e8",
            height: 130,
          },
          headerTintColor: "black",
          headerRight: () => (
            <Ionicons name="person" style={globalStyles.headerIcon} />
          ),
        }}
      />
      <Stack.Screen name="Discharge" component={Discharge} />
      <Stack.Screen name="Timetable" component={Timetable} />
      <Stack.Screen name="GroupAndSection" component={GroupAndSection} />
      <Stack.Screen name="ExamSchedule" component={ExamSchedule} />
      <Stack.Screen name="ExamenGrade" component={ExamenGrade} />
      <Stack.Screen name="Assessment" component={Assessment} />
      <Stack.Screen name="Pourcentage" component={Pourcentage} />
      <Stack.Screen name="AcademicTranscript" component={AcademicTranscript} />
      <Stack.Screen name="Debts" component={Debts} />
      <Stack.Screen name="AcademicVacation" component={AcademicVacation} />
      <Stack.Screen name="Enrollment" component={Enrollment} />
    </Stack.Navigator>
  );
}

function CustomBackButton(props) {
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="black"
      style={style.backButton}
      {...props}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e8e8e8",
            height: 130,
          },

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarActiveBackgroundColor: "#4b9b81",
          tabBarStyle: {
            backgroundColor: "#2f2f3d",
            marginTop: 10,
            marginBottom: 20,
            marginHorizontal: 20,
            height: 80,
            borderRadius: 20,
          },
        }}
      >
        <Tab.Screen
          name="Student Portal"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" style={globalStyles.logo} />
            ),
            headerRight: () => (
              <Ionicons name="person" style={globalStyles.headerIcon} />
            ),
          }}
        />

        <Tab.Screen
          name="ID Cards"
          component={Cards}
          options={{
            tabBarIcon: () => (
              <Ionicons name="card" style={globalStyles.logo} />
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper" style={globalStyles.logo} />
            ),
          }}
        />

        <Tab.Screen
          name="My Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person" style={globalStyles.logo} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
