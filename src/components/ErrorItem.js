import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Something went wrong!</Text>
      <Feather name="frown" size={100} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  errorMessage: {
    fontSize: 30,
    color: "#fff",
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default ErrorItem;
