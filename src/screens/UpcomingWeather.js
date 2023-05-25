import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    weather: [
      {
        main: "Cloud",
      },
    ],
  },
];

const UpcomingWeather = () => {
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
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
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
