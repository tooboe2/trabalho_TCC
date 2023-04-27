import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  gap: 15px;
  align-items: center;
  background-color: #3e3e42;
`;

export const TitleContainer = styled.View`
  width: 82%;
  gap: 4px;
  padding: 0 0 8px 0;
  border-radius: 10px;
  align-items: center;
  //background-color: #2d2d30;
`;
export const Form = styled.View`
  width: 82%;
  gap: 0;
  padding: 13px;
  border-radius: 10px;
  align-items: center;
  background-color: #2d2d30;
`;
export const ContainerRegister = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fffbf5;
  font-weight: bold;
  font-size: 17.1px;
`;

export const SubTitle = styled.Text`
  color: #fffbf5;
  line-height: 19px;
  text-align: center;
  font-size: 14px;
  padding: 0 40px 4px 40px;
`;

export const Scroll = styled.ScrollView`
  max-height: 340px;
`;
