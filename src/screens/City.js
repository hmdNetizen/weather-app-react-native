import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import moment from "moment";

import IconText from "../components/IconText";

const City = ({ weatherData }) => {
  const { name, population, country, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
        <Text style={[styles.countryName, styles.cityText]}>{country}</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor="red"
            bodyText={`Population: ${population}`}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor="#fff"
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor="#fff"
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  populationWrapper: {
    justifyContent: "center",
  },
  populationText: {
    fontSize: 25,
    color: "red",
    marginLeft: 7.5,
  },
  riseSetWrapper: {
    justifyContent: "space-around",
  },
  riseSetText: {
    fontSize: 20,
    color: "#fff",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
});

export default City;
