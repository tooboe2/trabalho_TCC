import { ContainerIcon, IconButton, Inputs } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function Input({ value, placeholder, onChange, icon, isPassword }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {isPassword ? (
        <View>
          <Inputs
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            withButton
          />
          <IconButton onPress={toggleSecureTextEntry}>
            <MaterialIcons
              name={secureTextEntry ? "visibility-off" : "visibility"}
              size={24}
              color="#555"
            />
          </IconButton>
        </View>
      ) : (
        <Inputs
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
        />
      )}

      <ContainerIcon>
        <Icon name={icon} size={20} color="#fff" />
      </ContainerIcon>
    </View>
  );
}
