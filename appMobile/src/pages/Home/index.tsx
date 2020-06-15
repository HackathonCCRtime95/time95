import React from 'react';
import {View, Image, ImageBackground, StyleSheet, Text} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    function handlerNavigateToDash(){
        navigation.navigate('DashNotification');
    }

    return <ImageBackground source={require('../../assets/background-login.png')} style={styles.container}>
                <View style={styles.logo}>
                <Image source={require('../../assets/Group.png')} />

                </View>

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handlerNavigateToDash}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </RectButton>
                </View>

            </ImageBackground>;

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', 
        height: '100%'

    },

    logo:{
        paddingTop:'30%',
        left:'35%',
 
    },
    footer:{
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 40,

    },
    button:{
        margin: 0,
        backgroundColor:'orange',
        width: 272,
        height: 51,
        borderRadius: 30,
        borderWidth: 15,
        left:'15%',
        

    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        fontWeight: "bold",

    }
})

export default Home;