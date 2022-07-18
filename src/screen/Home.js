import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import ListImage from "../components/ListImage/ListImage";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const Home = ({ navigation }) => {
  const imageData = [
    {
      title: "Image1",
      src: require("../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg"),
    },
    {
      title: "Image2",
      src: require("../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg"),
    },
    {
      title: "Image3",
      src: require("../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg"),
    },
    {
      title: "Image4",
      src: require("../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg"),
    },
    {
      title: "Image5",
      src: require("../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg"),
    },
    {
      title: "Image6",
      src: require("../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg"),
    },
    {
      title: "Image7",
      src: require("../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg"),
    },
    {
      title: "Image8",
      src: require("../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg"),
    },
    {
      title: "Image9",
      src: require("../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg"),
    },
    {
        title: "Image9",
        src: require("../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg"),
      }, 
  ];

  const renderItem = ({ item }) => {
    return <ListImage src={item.src} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView style={styles.ListImage}>
          <FlatList
            numColumns={3}
            data={imageData}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        </SafeAreaView>
      </View>
      <View style={styles.btnContainer}>

      
        <TouchableOpacity
            onPress={() => navigation.navigate("uploadPage")}
            style={[styles.btnStyle,styles.elevation]} >
          <View>
            <Ionicons name="add" size={24} color="black" style={styles.TextbtnStyle} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    height: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    marginHorizontal: 10,
  },
  btnStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',   
    marginRight: 5,
    backgroundColor: "#00f69c",
    bottom :15,
  },
  TextbtnStyle: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
