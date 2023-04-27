import { ActivityIndicator } from "react-native";
import { ButtonStyled, TextButton } from "./styles";



export function Button({ onClick, loading, text }) {


    return (
        <ButtonStyled onPress={() => onClick()}>
            {loading ? (
                <ActivityIndicator size="small" color="#FCFFE7" />
            ) : (
                <TextButton>{text}</TextButton>
            )}
        </ButtonStyled>
    )
}