import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  border-radius: 5px;
  top: 6.2%;
  left: 4.2%;
`;

export const ButtonStyled = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 20px;
  background-color: #2d2d30;
  width: 30px;
  height: 30px;
`;
