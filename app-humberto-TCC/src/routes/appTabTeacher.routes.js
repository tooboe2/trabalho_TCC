import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import Home2 from "../pages/Student/Home2";
import Solicitacoes from "../pages/Teacher/Solicitacoes";

const AppTab = createBottomTabNavigator();

function AppTabTeacherRoutes() {
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
        name="Solicitações"
        component={Solicitacoes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="university" color={color} size={20} />
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

export default AppTabTeacherRoutes;
