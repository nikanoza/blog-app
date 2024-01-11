import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { launchImageLibrary } from "react-native-image-picker";

import { useCategory } from "../store";
import { Folder, Logo } from "../assets";
import newBlogSchema, { initialValues } from "../schemas/create-blog";

const NewBlogScreen = () => {
  const categories = useCategory((state) => state.data);
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <Text style={styles.title}>ბლოგის დამატება</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={newBlogSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.label}>ატვირთეთ ფოტო</Text>
            {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            )}
            <TouchableOpacity
              style={styles.imageBox}
              onPress={handleChoosePhoto}
            >
              <Image source={Folder} />
              <Text style={styles.label}>აირჩიეთ ფაილი</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default NewBlogScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 10,
  },
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
  label: {
    color: "#1A1A1F",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 40,
  },
  imageBox: {
    borderStyle: "dashed",
    borderWidth: 2,
    paddingVertical: 24,
    borderRadius: 30,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
