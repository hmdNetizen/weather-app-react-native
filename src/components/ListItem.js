import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

import { weatherType } from "../utilities/weatherTypes";

const ListItem = ({ dt_txt, main: { temp_min, temp_max }, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition]?.icon} size={40} color="#fff" />
      <View style={styles.dataTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={styles.date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(temp_min)}° / ${Math.round(
        temp_max
      )}°`}</Text>
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
    backgroundColor: "indianred",
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
  dataTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
