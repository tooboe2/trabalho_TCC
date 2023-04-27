import styled from "styled-components/native";

export const ContainerCard = styled.View`
  background-color: #f5f6fa;
  border-radius: 3px;
  margin: 8px;
  align-items: center;
  justify-content: center;
  width: 305px;
  height: 45px;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: ${(props) => (props.selected ? "#007acc" : "transparent")};
`;

export const CardText = styled.Text`
  font-size: 15px;
  color: #555;
  font-weight: bold;
`;
