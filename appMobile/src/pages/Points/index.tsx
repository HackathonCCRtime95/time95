import React from 'react';
import Constants from 'expo-constants';
import {Feather as Icon } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

const Points = () =>{
    const navigation = useNavigation();
    function handleNavigateBack(){
        navigation.goBack();
    }

    return(
        <>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Icon name="arrow-left" size={20} color='orange'/>
            </TouchableOpacity>
            
            <Text>Encontre no mapa os restaurantes próximo de você</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map}/>
            </View>
        </View>

        <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.item} onPress={()=>{}}>
                <Image source={require('../../assets/home-24px.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
                <Image source={require('../../assets/radio-24px.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
                <Image source={require('../../assets/restaurant-24px.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=>{}}>
                <Image source={require('../../assets/description-24px.png')} />
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },
    mapContainer:{
        flex: 1,
        width: '100%',
        borderRaius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },
    map:{
        width: '100%',
        height: '100%',
    },
    itemsContainer:{

    },
    item:{}
});
    export default Points;