import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./StyleHomeScreens/style";

const ExamenGrade = () => (
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
          <Text style={style.gradeText3}>Grade</Text>
        </View>
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 1:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 2:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 3:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 4:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 5:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 6:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        
        <View style={style.gradeRow}>
          <Text style={style.gradeText1}>module Name 7:</Text>
          <Text style={style.gradeText2}>/</Text>
          <Text style={style.gradeText3}>/</Text>
        </View>
        
        

      </View>
    </View>
  </ScrollView>
);

export default ExamenGrade;
