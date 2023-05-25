import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { TEST_KEY } from "@env";

import Tabs from "./src/components/Tabs";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  console.log(TEST_KEY);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (location) {
    console.log(location);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
