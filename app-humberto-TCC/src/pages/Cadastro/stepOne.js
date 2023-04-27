import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  ToastAndroid,
} from "react-native";
import bcrypt from "bcryptjs";
import validateEmail from "../../utils/validateEmail";
import { api } from "../../utils/api";
import {
  Container,
  ContainerSwitch,
  Form,
  TextStyle,
  TextTitle,
  TextoSwitch,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

const StepOne = (props) => {
  const { onNextStep, navigation } = props;
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    tipoPessoa: false,
  });

  const handleNomeChange = useCallback((e) => {
    setFormValues((oldState) => ({ ...oldState, nome: e }));
  }, []);

  const handleEmailChange = useCallback((e) => {
    setFormValues((oldState) => ({ ...oldState, email: e }));
  }, []);

  const handleSenhaChange = useCallback((e) => {
    setFormValues((oldState) => ({ ...oldState, senha: e }));
  }, []);

  const handleConfirmarSenhaChange = useCallback((e) => {
    setFormValues((oldState) => ({ ...oldState, confirmarSenha: e }));
  }, []);

  const handleTipoPessoaChange = useCallback(() => {
    setFormValues((oldState) => ({
      ...oldState,
      tipoPessoa: !oldState.tipoPessoa,
    }));
  }, []);

  const handleSubmit = () => {
    if (
      formValues.nome.trim() === "" ||
      formValues.email.trim() === "" ||
      formValues.senha.trim() === "" ||
      formValues.confirmarSenha.trim() === ""
    ) {
      ToastAndroid.show(
        "Preencha todos os campos corretamente.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return;
    }

    if (!validateEmail(formValues.email)) {
      ToastAndroid.show(
        "Insira um Email válido.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return;
    }

    if (formValues.senha.trim() !== formValues.confirmarSenha.trim()) {
      ToastAndroid.show(
        "As senhas devem ser iguais.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      return;
    }

    const id_tipo_pessoa = formValues.tipoPessoa
      ? "643bf78fed7b6eb4a6383a7e"
      : "64009ad4a57d0ae72e007fa7";
    const cadastroDTO = {
      nome: formValues.nome,
      email: formValues.email,
      senha: formValues.senha,
      fl_ativo: true,
      id_tipo_pessoa,
    };
    onNextStep(cadastroDTO);
  };

  return (
    <Container>
      <ButtonBack
        text=""
        onClick={() => navigation.navigate("Login")}
        loading={false}
      />

      <TextStyle>
        <TextTitle>Cadastro</TextTitle>
      </TextStyle>

      <Form>
        <Input
          placeholder="Nome"
          onChange={handleNomeChange}
          value={formValues.nome}
          icon="drive-file-rename-outline"
          isPassword={false}
        />
        <Input
          placeholder="Email"
          onChange={handleEmailChange}
          value={formValues.email}
          icon="alternate-email"
          isPassword={false}
        />
        <Input
          placeholder="Senha"
          onChange={handleSenhaChange}
          value={formValues.senha}
          icon="alternate-email"
          isPassword={true}
        />
        <Input
          placeholder="Confirmar Senha"
          onChange={handleConfirmarSenhaChange}
          value={formValues.confirmarSenha}
          icon="alternate-email"
          isPassword={true}
        />
        <ContainerSwitch>
          <TextoSwitch>Aluno</TextoSwitch>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={formValues.tipoPessoa ? "#2C74B3" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleTipoPessoaChange}
            value={formValues.tipoPessoa}
          />
          <TextoSwitch>Professor</TextoSwitch>
        </ContainerSwitch>

        <Button text="Avançar" onClick={handleSubmit} loading={false} />
      </Form>
    </Container>
  );
};

export default StepOne;
