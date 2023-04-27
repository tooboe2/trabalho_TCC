import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3e3e42;
`;
export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Form = styled.View`
  width: 82%;
  gap: 12px;
  padding: 38px;
  border-radius: 5px;
  align-items: center;
  background-color: #2d2d30;
`;

export const FormConcluded = styled.View`
  width: 82%;
  gap: 25px;
  padding: 40px 10px;
  border-radius: 5px;
  align-items: center;
  background-color: #2d2d30;
`;

export const TextoSwitch = styled.Text`
  margin-right: 10px;
  margin-left: 10px;
  color: #fcffe7;
`;

export const TextStyle = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #2d2d30;
  width: 120px;
  height: 40px;

  position: absolute;
  top: 5.6%;
`;

export const TextTitle = styled.Text`
  color: #fcffe7;
  font-weight: bold;
`;

export const TextConcluded = styled.Text`
  color: #fcffe7;
  font-weight: bold;
  font-size: 29px;
`;
