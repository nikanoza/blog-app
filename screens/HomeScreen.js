import { Text, StyleSheet, View, Image, Button, FlatList } from "react-native";
import { Logo, Poster } from "../assets";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useCategory } from "../store";
import { CategoryItem } from "../components";

const HomeScreen = () => {
  const categories = useCategory((state) => state.data);
  const fetchCategories = useCategory((state) => state.fetchData);

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("login");
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Button title="შესვლა" onPress={navigateToLogin} />
      </View>
      <Text style={styles.title}>ბლოგი</Text>
      <Image source={Poster} style={styles.poster} />
      <FlatList
        data={categories}
        renderItem={CategoryItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
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
