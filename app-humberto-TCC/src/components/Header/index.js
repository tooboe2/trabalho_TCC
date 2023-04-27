import {
  Container,
  ButtonStyled,
  Container2,
  TextStyle,
  TextTitle,
} from "./styles";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { useAuth } from "../../hooks/useAuth";

export function Header({ pageName }) {
  const { logout, user } = useAuth();
  function handleLogout() {
    logout();
  }
  return (
    <>
      <Container2>
        <TextStyle>
          <TextTitle>{pageName}</TextTitle>
        </TextStyle>
      </Container2>

      <Container>
        <ButtonStyled onPress={() => handleLogout()}>
          <Ionicons name="exit-outline" size={24} color="#fcffe7" />
        </ButtonStyled>
      </Container>
    </>
  );
}
