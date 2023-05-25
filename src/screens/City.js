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
import IconText from "../components/IconText";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor="red"
            bodyText={8000}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor="#fff"
            bodyText={"07:15:20am"}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor="#fff"
            bodyText={"17:25:09pm"}
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
