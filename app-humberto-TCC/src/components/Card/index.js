import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { CardText, ContainerCard } from "./styles";

export function Card(props) {
  const { item, isSelected, onSelect } = props;
  const handlePress = () => {
    onSelect(item._id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ContainerCard selected={isSelected}>
        <CardText>{item.descricao}</CardText>
      </ContainerCard>
    </TouchableOpacity>
  );
}
