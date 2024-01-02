import { Text, StyleSheet, View, Image, Button } from "react-native";
import { Logo } from "../assets";

import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Button title="შესვლა" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    width: "auto",
    backgroundColor: "#ffffff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  page: {
    flex: 1,
    flexDirection: "column",
  },
});
