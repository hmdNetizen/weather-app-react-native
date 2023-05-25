import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      main={item.main}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
