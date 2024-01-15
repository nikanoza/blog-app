import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  DatePickerIOS,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";

import { useCategory } from "../store";
import { Folder, Logo } from "../assets";
import newBlogSchema, { initialValues } from "../schemas/create-blog";

const NewBlogScreen = () => {
  const categories = useCategory((state) => state.data);
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      setPhoto(result.assets[0].uri);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            setValues,
            values,
            touched,
            errors,
          }) => (
            <View style={{ paddingHorizontal: 20 }}>
              {photo ? (
                <Image source={{ uri: photo }} style={styles.image} />
              ) : (
                <Text style={styles.label}>ატვირთეთ ფოტო</Text>
              )}
              <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
                <Image source={Folder} />
                <Text style={styles.label}>აირჩიეთ ფაილი</Text>
              </TouchableOpacity>
              <Text style={styles.label}>ავტორი*</Text>
              <TextInput
                onChangeText={handleChange("author")}
                onBlur={handleBlur("author")}
                value={values.author}
                style={styles.input}
              />
              {touched.author && errors.author && (
                <Text style={{ color: "red" }}>{errors.author}</Text>
              )}
              <Text style={styles.label}>სათაური*</Text>
              <TextInput
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                style={styles.input}
              />
              {touched.title && errors.title && (
                <Text style={{ color: "red" }}>{errors.title}</Text>
              )}
              <Text style={styles.label}>აღწერა*</Text>
              <TextInput
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                multiline={true}
                numberOfLines={5}
                value={values.description}
                style={{ ...styles.input, height: "auto" }}
              />
              {touched.description && errors.description && (
                <Text style={{ color: "red" }}>{errors.description}</Text>
              )}
              <Text style={styles.label}>გამოქვეყნების თარიღი*</Text>
              <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                <Text style={styles.dateText}>{values.publish_date}</Text>
              </TouchableOpacity>

              {isDatePickerVisible && (
                <DatePickerIOS
                  date={selectedDate}
                  onDateChange={(date) => {
                    setValues("publish_date", date.toString());
                  }}
                  mode="date"
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
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
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginHorizontal: "auto",
  },
  input: {
    height: 44,
    borderStyle: "solid",
    borderWidth: 1.5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
