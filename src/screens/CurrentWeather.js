import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherTypes";

export default function CurrentWeather({ currentWeather }) {
  const {
    main: { feels_like, temp, temp_max, temp_min },
    weather,
  } = currentWeather;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          size={100}
          name={weatherType[weatherCondition]?.icon}
          color="#fff"
        />
        <Text style={styles.temp}>{`${temp}°`}</Text>
        <Text style={styles.feels}>Feels like {feels_like}</Text>
        <RowText
          messageOne={`High: ${temp_max} `}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  temp: {
    fontSize: 48,
    color: "#000",
  },
  feels: {
    fontSize: 30,
    color: "#000",
  },
  highLow: {
    fontSize: 20,
    color: "#000",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
