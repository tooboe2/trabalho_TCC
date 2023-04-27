import React, { useState } from "react";
import { TouchableOpacity, Text, ToastAndroid, Image } from "react-native";
import validateEmail from "../../utils/validateEmail";
import { useAuth } from "../../hooks/useAuth";
import { Container, Form, ContainerRegister, TextSignUpLink } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from "../../../assets/loginimg.png";

const Login = ({ navigation }) => {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    if (email.trim() === "" || senha.trim() === "") {
      ToastAndroid.show(
        "Preencha todos os campos.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      ToastAndroid.show(
        "Insira um Email válido.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setIsLoading(false);
      return;
    }

    const loginDTO = {
      email: String(email),
      senha: String(senha),
    };

    try {
      await login(loginDTO);
      setIsLoading(false);
    } catch (error) {
      ToastAndroid.show(
        error.response.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setIsLoading(false);
      return;
    }

    setEmail("");
    setSenha("");
    setIsLoading(false);
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastrar Usuario");
  };

  return (
    <Container>
      <Image source={logo} style={{ width: 200, height: 200 }} />
      {/* <Text>Gerenciador TCC</Text> */}
      <Form>
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e)}
          value={email}
          icon="alternate-email"
          isPassword={false}
        />
        <Input
          placeholder="Senha"
          onChange={(e) => setSenha(e)}
          value={senha}
          icon="lock-outline"
          isPassword={true}
        />

        <Button text="Entrar" onClick={handleLogin} loading={isLoading} />

        <ContainerRegister>
          <Text style={{ color: "#fcffe7" }}>Não possui uma conta?</Text>
          <TouchableOpacity onPress={() => handleCadastro()}>
            <TextSignUpLink> Cadastre-se</TextSignUpLink>
          </TouchableOpacity>
        </ContainerRegister>
      </Form>
    </Container>
  );
};

export default Login;
