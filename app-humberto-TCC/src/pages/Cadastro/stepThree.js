import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";

import {
  Container,
  FormConcluded,
  TextConcluded,
  TextStyle,
  TextTitle,
} from "./styles";
import { ButtonBack } from "../../components/ButtonBack";
import { Image } from "react-native";
import logo from "../../../assets/concluded.png";
import { Button } from "../../components/Button";

const StepThree = (props) => {
  const { navigation } = props;

  return (
    <Container>
      <TextStyle>
        <TextTitle>Cadastro</TextTitle>
      </TextStyle>

      <FormConcluded>
        <TextConcluded>Usuário criado com sucesso!</TextConcluded>
        <Image source={logo} style={{ width: 150, height: 150 }} />
        <Button
          text="Voltar"
          onClick={() => navigation.navigate("Login")}
          loading={false}
        />
      </FormConcluded>
    </Container>
  );
};

export default StepThree;
