import React from 'react';
import {Button, StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import ListImage from "../components/ListImage/ListImage";
import { AntDesign } from '@expo/vector-icons'; 

const Home = ({navigation}) => {
    const imageData = [
        {
            title: 'Image1',
            src: require('../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg')
        },
        {
            title: 'Image2',
            src: require('../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg')
        },
        {
            title: 'Image3',
            src: require('../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg')
        },
        {
            title: 'Image4',
            src: require('../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg')
        },
        {
            title: 'Image5',
            src: require('../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg')
        },
        {
            title: 'Image6',
            src: require('../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg')
        },
        {
            title: 'Image7',
            src: require('../Assets/Image/aleisha-kalina-DQ_17uY9fjw-unsplash.jpg')
        },
        {
            title: 'Image8',
            src: require('../Assets/Image/raamin-ka-uR51HXLO7G0-unsplash.jpg')
        },
        {
            title: 'Image9',
            src: require('../Assets/Image/tamara-bellis-JoKS3XweV50-unsplash.jpg')
        },

    ]

    const renderItem = ({item})=>{
            return(
                <ListImage  src={item.src}/>
            )
    }
    return (
        <View style={styles.container}>
            <View>
                <SafeAreaView style={styles.ListImage}>
                    <FlatList numColumns={3} data={imageData} renderItem={renderItem} keyExtractor={(item) => item.title}/>
                </SafeAreaView>
            </View>
            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btnStyle}  onPress={()=>navigation.navigate('uploadPage') }>
                        <View >
                            
                            <Text style={styles.TextbtnStyle}>Add</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
         backgroundColor: '#e8e8e8',
        height: '100%',
    },
    btnContainer : {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 10,
    },
    btnStyle : {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#3ab56a', 
         marginLeft : 10	,
     },
     TextbtnStyle :{
        marginRight : 10,
        marginTop : 12,
        fontSize : 14,
        fontWeight : 'bold',
     }
});
