import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  border-radius: 5px;
  top: 6.2%;
  left: 86%;
`;

export const Container2 = styled.View`
  position: absolute;
  border-radius: 5px;
  top: 6.2%;
  left: 4.5%;
`;

export const ButtonStyled = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
  background-color: #2d2d30;
  width: 40px;
  height: 40px;
  padding-left: 4px;
`;

export const TextStyle = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #2d2d30;
  width: 120px;
  height: 40px;
`;

export const TextTitle = styled.Text`
  color: #fcffe7;
  font-weight: bold;
`;
