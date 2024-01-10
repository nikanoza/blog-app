import { Text, StyleSheet, View, Image, Button, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useCategory } from "../store";

const NewBlogScreen = () => {
  const categories = useCategory((state) => state.data);
  const navigation = useNavigation();

  return <View></View>;
};

export default NewBlogScreen;

const styles = StyleSheet.create({});
