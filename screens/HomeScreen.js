import { Text, StyleSheet, View, Image, Button } from "react-native";
import { Logo, Poster } from "../assets";
import React, { useEffect } from "react";
import { useCategory } from "../store";

const HomeScreen = () => {
  const categories = useCategory((state) => state.data);
  const fetchCategories = useCategory((state) => state.fetchData);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Button title="შესვლა" />
      </View>
      <Text style={styles.title}>ბლოგი</Text>
      <Image source={Poster} style={styles.poster} />
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
  title: {
    color: "#1A1A1F",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  poster: {
    alignSelf: "center",
    width: 350,
    resizeMode: "cover",
  },
});
