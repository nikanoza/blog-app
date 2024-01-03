import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryItem = ({ item }) => (
  <TouchableOpacity
    style={[styles.item, { backgroundColor: item.background_color }]}
  >
    <Text style={[styles.title, { color: item.text_color }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
