import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Profile() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    const fetchName = async () => {
        const response = await fetch("http://localhost:5000/get-name");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setName(data.name);
        setUniversity(data.university);
        setPlaceOfBirth(data.placeOfBirth);
        setDateOfBirth(data.dateOfBirth);
    };

    fetchName();
  }, []);
  
  return (
    <View style={globalStyles.profileContainer}>
      <View style={globalStyles.profileCard}>
        <Ionicons name="person" style={globalStyles.profileImg} />
        <View>
          <Text style={globalStyles.profileTitle}>{name}</Text>
          <Text style={globalStyles.profileText}>University of {university}</Text>
        </View>
      </View>

      <View style={globalStyles.profileLocation}>
        <View style={globalStyles.profileCardLocation}>
          <Ionicons name="location-outline" style={globalStyles.profileIcon} />
          <View>
            <Text style={globalStyles.profileTitleLang}>Place of Birth</Text>
            <Text style={globalStyles.profileText2}>{placeOfBirth}</Text>
          </View>
        </View>

        <View style={globalStyles.profileCardLocation}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            style={globalStyles.profileIcon}
          />
          <View>
            <Text style={globalStyles.profileTitleLang}>Date of Birth</Text>
            <Text style={globalStyles.profileText2}>{dateOfBirth}</Text>
          </View>
        </View>
      </View>

      <View style={globalStyles.profileLanguage}>
        <FontAwesome name="language" style={globalStyles.profileIcon} />
        <View style={globalStyles.profileLangCard}>
          <Text style={globalStyles.profileTitleLang}>Change Language</Text>
          <Text style={globalStyles.profileTextLang}>en</Text>
        </View>
      </View>

      <View style={globalStyles.profileLogout}>
        <Text style={globalStyles.profileTitleLogout}>LOGOUT</Text>
      </View>
    </View>
  );
}

export default Profile;
