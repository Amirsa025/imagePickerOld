import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/screen/Home";
import Upload from "./src/screen/upload";
import ImagePickerProvider from "./src/context/ImageContext";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <ImagePickerProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home">
                        {(props) => <Home  {...props}/> }
                    </Stack.Screen>
                    <Stack.Screen name="uploadPage">
                        {(props) => <Upload  {...props} />}
                    </Stack.Screen>
                </Stack.Navigator>
            </ImagePickerProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
