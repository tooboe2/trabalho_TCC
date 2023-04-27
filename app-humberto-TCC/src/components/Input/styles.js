import styled from "styled-components/native";

export const Inputs = styled.TextInput`
  background-color: #f8f8f8;
  height: 40px;
  width: 270px;
  padding: 8px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ContainerIcon = styled.View`
  background-color: #007acc;
  height: 40px;
  width: 35px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  top: 8.3px;
  right: 10px;
`;
