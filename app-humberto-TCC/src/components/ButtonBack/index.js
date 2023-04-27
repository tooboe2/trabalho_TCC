import { ActivityIndicator } from "react-native";
import { ButtonStyled, Container } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export function ButtonBack({ onClick, loading, text }) {
  return (
    <Container>
      <ButtonStyled onPress={() => onClick()}>
        <Icon
          name="arrow-back"
          size={28}
          color="#fcffe7"
          style={{ fontWeight: "bold" }}
        />
      </ButtonStyled>
    </Container>
  );
}
