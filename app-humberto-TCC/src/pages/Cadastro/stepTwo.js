import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";

import { api } from "../../utils/api";
import { Card } from "../../components/Card";
import { ActivityIndicator } from "react-native";
import { Container, Form, TextStyle, TextTitle } from "./styles";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

const StepTwo = (props) => {
  const { onPreviousStep, data, handleConcluded } = props;
  const [selectOptions, setSelectOptions] = useState([]);
  const [isLoadingAreas, setIsLoadingAreas] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    getAtuationArea();
  }, []);

  async function getAtuationArea() {
    setIsLoadingAreas(true);
    const { data } = await api.get("/area/listArea");
    setSelectOptions(data);
    setIsLoadingAreas(false);
  }

  if (isLoadingAreas) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#3e3e42",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#fcffe7" />
      </View>
    );
  }

  const handleCadastro = async () => {
    try {
      setIsLoadingAreas(true);
      const createPeople = await api.post("/people/create", {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        fl_ativo: data.fl_ativo,
        id_tipo_pessoa: data.id_tipo_pessoa,
      });

      for await (let item of selectedOptions) {
        await api.post("/area/createPeopleArea", {
          id_pessoa: createPeople.data._id,
          id_area: item.id,
          fl_ativo: true,
        });
      }
      setIsLoadingAreas(false);
      handleConcluded();
    } catch (error) {
      setIsLoadingAreas(false);
      ToastAndroid.show(
        "Ocorreu um erro ao criar o usuário.",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

  const handleCardSelect = (id) => {
    if (data.id_tipo_pessoa === "643bf78fed7b6eb4a6383a7e") {
      setSelectedOptions((prevSelectedOptions) => {
        const itemIndex = prevSelectedOptions.findIndex(
          (item) => item.id === id
        );
        if (itemIndex !== -1) {
          return [
            ...prevSelectedOptions.slice(0, itemIndex),
            ...prevSelectedOptions.slice(itemIndex + 1),
          ];
        } else {
          return [...prevSelectedOptions, { id }];
        }
      });
    } else {
      // Seleção única
      setSelectedCardId((prevSelectedId) =>
        prevSelectedId === id ? null : id
      );

      setSelectedOptions((prevSelectedOptions) => {
        const itemIndex = prevSelectedOptions.findIndex(
          (item) => item.id === id
        );
        if (itemIndex !== -1) {
          return [
            ...prevSelectedOptions.slice(0, itemIndex),
            ...prevSelectedOptions.slice(itemIndex + 1),
          ];
        } else {
          return [{ id }];
        }
      });
    }
  };

  return (
    <Container>
      <ButtonBack onClick={() => onPreviousStep()} loading={false} />

      <TextStyle>
        <TextTitle>Cadastro</TextTitle>
      </TextStyle>

      <Form style={{ gap: 7 }}>
        <Text style={styles.buttonText}>Selecione sua área de atuação</Text>

        <View style={styles.containerList}>
          {selectOptions.map((item) => {
            return (
              <Card
                key={item._id}
                item={item}
                isSelected={selectedOptions.some(
                  (selectedItem) => selectedItem.id === item._id
                )}
                onSelect={() => handleCardSelect(item._id)}
              />
            );
          })}
        </View>
        <Button text="Cadastrar" onClick={handleCadastro} loading={false} />
      </Form>
    </Container>
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
  containerList: {
    gap: -10,
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
    width: 45,
    height: 22,
    marginHorizontal: 8,
  },
});

export default StepTwo;
