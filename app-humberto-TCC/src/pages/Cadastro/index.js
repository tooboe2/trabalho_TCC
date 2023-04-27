import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import bcrypt from "bcryptjs";
import Toast from "react-native-toast-message";
import validateEmail from "../../utils/validateEmail";
import { api } from "../../utils/api";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const CadastroUsuario = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNextStep = (data) => {
    setUserData({ ...data }); // atualiza os dados do usuário
    setStep(step + 1); // atualiza o passo atual
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleConcluded = () => {
    setStep(3);
  };

  return (
    <>
      {step === 1 && (
        <StepOne navigation={navigation} onNextStep={handleNextStep} />
      )}
      {step === 2 && (
        <StepTwo
          navigation={navigation}
          onPreviousStep={handlePreviousStep}
          data={userData}
          handleConcluded={handleConcluded}
        />
      )}
      {step === 3 && <StepThree navigation={navigation} />}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f6b93b",
    borderRadius: 4,
    padding: 8,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#f5f6fa",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#0a3d62",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoSwitch: {
    marginRight: 10,
    marginLeft: 10,
    color: "#f5f6fa",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f5f6fa",
    backgroundColor: "#f5f6fa",
    borderRadius: 4,
    padding: 8,
    width: 55,
    height: 24,
    marginHorizontal: 8,
  },
});

export default CadastroUsuario;
