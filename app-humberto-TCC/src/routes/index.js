import React from "react";
import { useAuth } from "../hooks/useAuth";

import AuthRoutes from "./auth.routes";
//import AppRoutes from './app.routes';
import { ActivityIndicator, View } from "react-native";
import AppTabStudentRoutes from "./appTabStudent.routes";
import AppTabTeacherRoutes from "./appTabTeacher.routes";

function Routes() {
  const { signed, loading, user } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  if (signed) {
    if (user.tipo_pessoa === "Aluno") {
      return <AppTabStudentRoutes />;
    } else {
      return <AppTabTeacherRoutes />;
    }
  } else {
    return <AuthRoutes />;
  }
}

export default Routes;
