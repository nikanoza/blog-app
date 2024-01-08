import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const LoginScreen = () => {
  const { width: screenWidth } = Dimensions.get("window");
  return (
    <View style={styles.page}>
      <Text style={styles.title}>შესვლა</Text>
      <Text style={styles.label}>ელ-ფოსტა</Text>
      <TextInput
        placeholder="Example@redberry.ge"
        style={[styles.input, { width: screenWidth - 40 }]}
      />
      <TouchableOpacity
        style={[styles.button, { width: screenWidth - 40 }]}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>შესვლა</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: "#1A1A1F",
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    color: "#1A1A1F",
    marginRight: "auto",
    marginTop: 30,
  },
  input: {
    height: 44,
    borderStyle: "solid",
    borderWidth: 1.5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#5D37F3",
    marginTop: 30,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
  },
});
