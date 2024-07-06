import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./StyleHomeScreens/style";

function AcademicTranscript() {
  const [avgModule1, setAvgModule1] = useState("0");
  const [avgModule2, setAvgModule2] = useState("0");
  const [avgModule3, setAvgModule3] = useState("0");
  const [avgModule4, setAvgModule4] = useState("0");
  const [avgModule5, setAvgModule5] = useState("0");

  const [average, setAverage] = useState(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      const response = await fetch("http://localhost:5000/get-assessment");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAvgModule1(data.avgModule1 || "/");
      setAvgModule2(data.avgModule2 || "/");
      setAvgModule3(data.avgModule3 || "/");
      setAvgModule4(data.avgModule4 || "/");
      setAvgModule5(data.avgModule5 || "/");
      setAverage(data.average || "00.00");
    };

    fetchTranscript();
  }, []);

  const getColor = (a) => {
    return a < 10 ? "red" : "green";
  };

  return (
    <ScrollView>
      <View style={style.containerSemestre}>
        <View style={style.decisionGroup}>
          <TouchableOpacity style={style.touchYear}>
            <Text style={style.yearT}>2023 / 2024</Text>
          </TouchableOpacity>
        </View>

        <View style={style.decision}>
          <Text style={style.decisionText}>Decision: </Text>
          <View style={style.decisionSecond}>
            <Text style={style.anual}>Anual average: 00.00</Text>
            <Text style={style.credit}>Credits: 00</Text>
          </View>
        </View>

        <View style={style.transcript}>
          <Text style={style.module}>Module </Text>
          <Text style={style.point}>Credit </Text>
          <Text style={style.point}>Coef </Text>
          <Text style={style.point}>Average </Text>
        </View>

        <View style={style.certificate}>
          <Text style={style.year}>1st year Lisence: </Text>
          <View style={style.certificateGroup}>
            <Text
              style={[
                style.average,
                {
                  color: getColor(average),
                  borderColor: getColor(average),
                },
              ]}
            >
              Average Semestre 1: {average}
            </Text>
            <Text style={style.average}>Credit: 00</Text>
          </View>

          <View style={style.certificateModule}>
            <Text style={style.module}>Module 1: </Text>
            <Text style={style.point}>0</Text>
            <Text style={style.point}>4</Text>
            <Text style={[style.point, { color: getColor(avgModule1) }]}>
              {avgModule1}
            </Text>
          </View>
          <View style={style.certificateModule}>
            <Text style={style.module}>Module 2: </Text>
            <Text style={style.point}>0</Text>
            <Text style={style.point}>3</Text>
            <Text style={[style.point, { color: getColor(avgModule2) }]}>
              {avgModule2}
            </Text>
          </View>
          <View style={style.certificateModule}>
            <Text style={style.module}>Module 3: </Text>
            <Text style={style.point}>0</Text>
            <Text style={style.point}>3</Text>
            <Text style={[style.point, { color: getColor(avgModule3) }]}>
              {avgModule3}
            </Text>
          </View>
          <View style={style.certificateModule}>
            <Text style={style.module}>Module 4: </Text>
            <Text style={style.point}>0</Text>
            <Text style={style.point}>2</Text>
            <Text style={[style.point, { color: getColor(avgModule4) }]}>
              {avgModule4}
            </Text>
          </View>
          <View style={style.certificateModule}>
            <Text style={style.module}>Module 5: </Text>
            <Text style={style.point}>0</Text>
            <Text style={style.point}>2</Text>
            <Text style={[style.point, { color: getColor(avgModule5) }]}>
              {avgModule5}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AcademicTranscript;
