import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../../components/Button";
import { CardPeople } from "../../../components/CardPeople";
import { Input } from "../../../components/Input";
import {
  Container,
  Form,
  Scroll,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";
import { Header } from "../../../components/Header";

const Orientadores = ({ navigation }) => {
  const [professores, setProfessores] = useState([
    {
      id: 1,
      nome: "Humberto Melo",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
    {
      id: 2,
      nome: "Reinaldo Brito",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
    {
      id: 3,
      nome: "José Melo",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
    {
      id: 4,
      nome: "Leonardo Lemos",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
    {
      id: 5,
      nome: "Robinson Cruz",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
    {
      id: 6,
      nome: "Robinson Cruz",
      descricao: "Área(s) de atuação: Tecnologia da Informação, Engenharia.",
      imagem: "https://files.uniaraxa.edu.br/assets/apps/lms/img/136-119.png",
    },
  ]);
  const [filterTeachers, setFilterTeachers] = useState(null);
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e);

    let filtered = [];

    if (e !== "") {
      filtered = professores.filter((obj) =>
        obj.nome.toString().toLowerCase().includes(e.toString().toLowerCase())
      );

      setFilterTeachers(filtered);
    } else {
      setFilterTeachers(null);
    }
  };

  return (
    <Container>
      <Header pageName="Orientadores" />

      <TitleContainer>
        <Title>Selecione um orientador e envie uma solicitação.</Title>
        <SubTitle>
          O orientador irá lhe acompanhar durante todo o processo de produção do
          seu TCC.
        </SubTitle>
      </TitleContainer>
      <Form>
        <Input
          placeholder="Buscar Professor"
          onChange={(e) => handleFilter(e)}
          value={filter}
          icon="youtube-searched-for"
          isPassword={false}
        />
        <Scroll>
          <View>
            {filterTeachers
              ? filterTeachers.map((item) => {
                  return (
                    <CardPeople
                      key={item.id}
                      title={item.nome}
                      description={item.descricao}
                      logo={item.imagem}
                    />
                  );
                })
              : professores.map((item) => {
                  return (
                    <CardPeople
                      key={item.id}
                      title={item.nome}
                      description={item.descricao}
                      logo={item.imagem}
                    />
                  );
                })}
          </View>
        </Scroll>
      </Form>
      <Button
        text="Enviar Solicitação"
        onClick={() => navigation.navigate("Home2")}
        loading={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    gap: 10,
  },
});

export default Orientadores;
