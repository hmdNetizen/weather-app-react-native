import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = ({ dt_txt, main: { temp_min, temp_max }, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={40} color="#fff" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{temp_min}</Text>
      <Text style={styles.temp}>{temp_max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "pink",
    borderWidth: 5,
  },
  temp: {
    fontSize: 15,
    color: "#fff",
  },
  date: {
    color: "#fff",
    fontSize: 12,
  },
});

export default ListItem;
