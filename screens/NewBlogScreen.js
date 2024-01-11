import { Text, StyleSheet, View, Image, Button, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useCategory } from "../store";
import { Logo } from "../assets";

const NewBlogScreen = () => {
  const categories = useCategory((state) => state.data);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <Text style={styles.title}>ბლოგის დამატება</Text>
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
        }) => <View></View>}
      </Formik>
    </View>
  );
};

export default NewBlogScreen;

const styles = StyleSheet.create({
  header: {
    width: "auto",
    backgroundColor: "#ffffff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#1A1A1F",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});
