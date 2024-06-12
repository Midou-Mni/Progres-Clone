import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Profile() {
  return (
    <View style={globalStyles.profileContainer}>
      <View style={globalStyles.profileCard}>
        <Ionicons name="person" style={globalStyles.profileImg} />
        <View>
          <Text style={globalStyles.profileTitle}>Student Name</Text>
          <Text style={globalStyles.profileText}>University Name</Text>
        </View>
      </View>

      <View style={globalStyles.profileLocation}>
        <View style={globalStyles.profileCardLocation}>
          <Ionicons name="location-outline" style={globalStyles.profileIcon} />
          <View>
            <Text style={globalStyles.profileTitle}>Place of Birth</Text>
            <Text style={globalStyles.profileText}>*****</Text>
          </View>
        </View>

        <View style={globalStyles.profileCardLocation}>
          <MaterialCommunityIcons
            name="calendar-month-outline" style={globalStyles.profileIcon}
          />
          <View>
            <Text style={globalStyles.profileTitle}>Date of Birth</Text>
            <Text style={globalStyles.profileText}>////-//-//</Text>
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
