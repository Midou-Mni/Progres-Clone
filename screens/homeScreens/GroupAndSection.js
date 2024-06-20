import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./StyleHomeScreens/style";

function GroupAndSection() {
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    const fetchSection = async () => {
      const response = await fetch("http://localhost:5000/get-details");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSection(data.section);
      setGroup(data.group);
    };

    fetchSection();
  }, []);

  return (
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
          <Text style={style.groupText2}>section {section}</Text>
        </View>
        <View style={style.groupRowBelow}>
          <Text style={style.groupText1}>Group</Text>
          <Text style={style.groupText2}>group {group}</Text>
        </View>
      </View>
    </View>
  );
}

export default GroupAndSection;
