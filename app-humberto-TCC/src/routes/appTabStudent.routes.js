import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Orientadores from "../pages/Student/Orientadores";
import Home2 from "../pages/Student/Home2";

const AppTab = createBottomTabNavigator();

function AppTabStudentRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007acc",
        tabBarInactiveTintColor: "#fffbf5",
        tabBarStyle: [
          {
            backgroundColor: "#2d2d30",
            borderTopColor: "#555",
          },
        ],
      }}
    >
      <AppTab.Screen
        name="Orientadores"
        component={Orientadores}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chalkboard-teacher" color={color} size={20} />
          ),
        }}
      />
      <AppTab.Screen
        name="Teste"
        component={Home2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" color={color} size={20} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}

export default AppTabStudentRoutes;
