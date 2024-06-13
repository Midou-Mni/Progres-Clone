import React from "react";
import { View, Text, ScrollView } from "react-native";
import { style } from "./StyleHomeScreens/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ExamSchedule = () => (
  <ScrollView style={style.schedule}>
    <View style={style.schedule}>
      <Text style={style.scheduleTitle}>Semestre 1 </Text>
      <Text style={style.scheduleType}>Normal</Text>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 1: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-01</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 2: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-03</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>
      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 3: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-05</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>
      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 4: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-08</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>
      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 5: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-10</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 6: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-10</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 7: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-10</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>

{/* ======================== Ratrapage ======================== */}
      <Text style={style.scheduleType}>Ratrapage</Text>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 1: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-01</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>

      <View style={style.scheduleModule}>
        <Text style={style.scheduleModuleName}>Module 2: </Text>

        <View style={style.scheduleDateContainer}>
          <View style={style.scheduleDate}>
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>2024-04-03</Text>
          </View>

          <View style={style.scheduleTime}>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color="blue"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "blue" }}>08:45 - 90</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default ExamSchedule;
