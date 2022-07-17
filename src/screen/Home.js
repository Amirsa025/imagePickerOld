import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Details"
              onPress={()=>navigation.navigate('uploadPage')}
            />
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
