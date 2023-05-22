import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Feather size={100} name="sun" color="#000" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
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
    backgroundColor: "pink",
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
