import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "../../../components/Button";

const Home2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        text="Tela 1"
        onClick={() => navigation.navigate("Home")}
        loading={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
});

export default Home2;
