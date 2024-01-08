import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import loginSchema from "../schemas/login-schema";

const LoginScreen = () => {
  const { width: screenWidth } = Dimensions.get("window");

  const submitHandler = async (values) => {
    console.log(values);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>შესვლა</Text>
      <Text style={styles.label}>ელ-ფოსტა</Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={submitHandler}
        validationSchema={loginSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <TextInput
              placeholder="Example@redberry.ge"
              style={[styles.input, { width: screenWidth - 40 }]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <TouchableOpacity
              style={[styles.button, { width: screenWidth - 40 }]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>შესვლა</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
