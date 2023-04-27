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

const Solicitacoes = ({ navigation }) => {
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
      <Header pageName="Solicitações" />

      <TitleContainer>
        <Title>Solicitações de orientação recebidas.</Title>
        <SubTitle>
          Lista de alunos que lhe solicitaram orientação. Aceite ou recuse as
          mesmas.
        </SubTitle>
      </TitleContainer>
      <Form>
        <Input
          placeholder="Buscar Solicitações"
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

export default Solicitacoes;
