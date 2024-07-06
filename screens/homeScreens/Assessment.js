import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { style } from "./StyleHomeScreens/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Assessment() {
  const [module1, setModule1] = useState("0");
  const [module2, setModule2] = useState("0");
  const [module3, setModule3] = useState("0");
  const [module4, setModule4] = useState("0");
  const [module5, setModule5] = useState("0");
  const [tpModule1, setTpModule1] = useState("0");
  const [tpModule2, setTpModule2] = useState("0");

  useEffect(() => {
    const fetchAssessment = async () => {
      const response = await fetch("http://192.168.1.2:5000/get-assessment");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setModule1(data.module1);
      setModule2(data.module2);
      setModule3(data.module3);
      setModule4(data.module4);
      setModule5(data.module5);
      setTpModule1(data.tpModule1);
      setTpModule2(data.tpModule2);
    };

    fetchAssessment();
  }, []);

  const getColor = (a) => {
    return a < 10 ? "red" : "green";
  };
  const getBackColor = (a) => {
    return a < 10 ? "#ffe0e0" : "#f3fcf4";
  };

  return (
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

            <View style={[style.assessmentGrade, {borderColor: getColor(module1), backgroundColor: getBackColor(module1)}]}>
              <Text
                style={{color: getColor(module1)}}
              >
                Grade: {module1}
              </Text>
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

            <View
              style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(module2),
                  borderColor: getColor(module2),
                },
              ]}
            >
              <Text style={{ color: getColor(module2) }}>
                Grade: {module2}{" "}
              </Text>
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

            <View
              style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(module3),
                  borderColor: getColor(module3),
                },
              ]}
            >
              <Text style={{ color: getColor(module3) }}>Grade: {module3} </Text>
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

            <View style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(module4),
                  borderColor: getColor(module4),
                },
              ]}>
              <Text style={{ color: getColor(module4) }}>Grade: {module4} </Text>
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

            <View style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(module5),
                  borderColor: getColor(module5),
                },
              ]}>
              <Text style={{ color: getColor(module5) }}>Grade: {module5} </Text>
            </View>
          </View>
        </View>

        <View style={style.PourcentageModule}>
          <Text style={style.scheduleModuleName}>TP 1: </Text>

          <View style={style.PourcentageDateContainer}>
            <View style={style.assessmentTD}>
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={18}
                color="orange"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#e66300" }}>TP</Text>
            </View>

            <View style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(tpModule1),
                  borderColor: getColor(tpModule1),
                },
              ]}>
              <Text style={{ color: getColor(tpModule1) }}>Grade: {tpModule1}</Text>
            </View>
          </View>
        </View>

        <View style={style.PourcentageModule}>
          <Text style={style.scheduleModuleName}>TP 2: </Text>

          <View style={style.PourcentageDateContainerBelow}>
            <View style={style.assessmentTD}>
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={18}
                color="orange"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#e66300" }}>TP</Text>
            </View>

            <View style={[
                style.assessmentGrade,
                {
                  backgroundColor: getBackColor(tpModule2),
                  borderColor: getColor(tpModule2),
                },
              ]}>
              <Text style={{ color: getColor(tpModule2) }}>Grade: {tpModule2}</Text>
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
          <Text style={style.scheduleModuleName}>TP 1: </Text>

          <View style={style.PourcentageDateContainer}>
            <View style={style.assessmentTD}>
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={18}
                color="orange"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#e66300" }}>TP</Text>
            </View>

            <View style={style.assessmentGrade}>
              <Text style={{ color: "red" }}>Grade: Empty</Text>
            </View>
          </View>
        </View>

        <View style={style.PourcentageModule}>
          <Text style={style.scheduleModuleName}>TP 2: </Text>

          <View style={style.PourcentageDateContainerBelow}>
            <View style={style.assessmentTD}>
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={18}
                color="orange"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#e66300" }}>TP</Text>
            </View>

            <View style={style.assessmentGrade}>
              <Text style={{ color: "red" }}>Grade: Empty</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Assessment;
