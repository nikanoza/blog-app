import { Text, StyleSheet, View, Image, Button, FlatList } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>შესვლა</Text>
      <Text></Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#1A1A1F",
    marginTop: 10,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    color: "#1A1A1F",
  },
});
