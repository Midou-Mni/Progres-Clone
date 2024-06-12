import Ionicons from "@expo/vector-icons/Ionicons";
import { globalStyles } from "./styles/global";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import News from "./screens/News";
import Profile from "./screens/Profile";
import Cards from "./screens/Cards";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#e8e8e8",
            height: 100,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarActiveBackgroundColor: "#4b9b81",
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            backgroundColor: "#2f2f3d",
            margin: 20,
            borderRadius: 20,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: 80,
          },
          tabBarItemStyle: {
            borderRadius: 20,
            height: 80,
            paddingVertical: 10
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
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
