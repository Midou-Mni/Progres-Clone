import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./StyleHomeScreens/style";

function ExamenGrade() {
  const [examModule1, setExamModule1] = useState("0");
  const [examModule2, setExamModule2] = useState("0");
  const [examModule3, setExamModule3] = useState("0");
  const [examModule4, setExamModule4] = useState("0");
  const [examModule5, setExamModule5] = useState("0");

  useEffect(() => {
    const fetchExam = async () => {
      const response = await fetch("http://192.168.1.2:5000/get-assessment");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
        setExamModule1(data.examModule1 || "/");
        setExamModule2(data.examModule2 || "/");
        setExamModule3(data.examModule3 || "/");
        setExamModule4(data.examModule4 || "/");
        setExamModule5(data.examModule5 || "/");
    };

    fetchExam();
  }, []);

  const getColor = (a) => {
    return a < 10 ? "red" : "green";
  };

  return (
    <ScrollView style={{ backgroundColor: "#e8e8e8" }}>
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
          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>Module</Text>
            <Text style={style.gradeText2}>Coef</Text>
            <Text style={[style.gradeText3, { color: 'green' }]}>Grade</Text>
          </View>

          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>module Name 1:</Text>
            <Text style={style.gradeText2}>/</Text>
            <Text style={[style.gradeText3, { color: getColor(examModule1) }]}>{examModule1}</Text>
          </View>

          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>module Name 2:</Text>
            <Text style={style.gradeText2}>/</Text>
            <Text style={[style.gradeText3, { color: getColor(examModule2) }]}>{examModule2}</Text>
          </View>

          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>module Name 3:</Text>
            <Text style={style.gradeText2}>/</Text>
            <Text style={[style.gradeText3, { color: getColor(examModule3) }]}>{examModule3}</Text>
          </View>

          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>module Name 4:</Text>
            <Text style={style.gradeText2}>/</Text>
            <Text style={[style.gradeText3, { color: getColor(examModule4) }]}>{examModule4}</Text>
          </View>

          <View style={style.gradeRow}>
            <Text style={style.gradeText1}>module Name 5:</Text>
            <Text style={style.gradeText2}>/</Text>
            <Text style={[style.gradeText3, { color: getColor(examModule5) }]}>{examModule5}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ExamenGrade;
