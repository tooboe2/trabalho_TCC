import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #F0EEED;
  padding: 12px 6px;
  margin: 6px;
  border-radius: 5px;
  justify-content: center;
  width: 305px;
`;

export const CardNormal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SelectIcons = styled.TouchableOpacity`
  border-radius: 15px;
`;


export const Details = styled.View`
  padding: 2px 5px;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
`;