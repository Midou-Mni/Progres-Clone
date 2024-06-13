import React from "react";
import { View, Text, ScrollView } from "react-native";
import { style } from "./StyleHomeScreens/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Assessment = () => (
  <ScrollView style={style.schedule}>
    <Text style={style.PourcentageTitle}>Semestre 1 </Text>

    <View style={style.PourcentageCard}>
      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 1: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 2: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 3: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 4: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 5: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 6: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 7: </Text>

        <View style={style.PourcentageDateContainerBelow}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>
    </View>

    {/* ========================================================= */}

    <Text style={style.PourcentageTitle}>Semestre 2 </Text>

    <View style={style.PourcentageCard}>
      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 1: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 2: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 3: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 4: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 5: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 6: </Text>

        <View style={style.PourcentageDateContainer}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>

      <View style={style.PourcentageModule}>
        <Text style={style.scheduleModuleName}>Module 7: </Text>

        <View style={style.PourcentageDateContainerBelow}>
          <View style={style.assessmentTD}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={18}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#e66300" }}>TD</Text>
          </View>

          <View style={style.assessmentGrade}>
            <Text style={{ color: "red" }}>Grade: Empty</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default Assessment;
