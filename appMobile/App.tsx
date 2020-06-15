import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from 'react-native' ;
import {Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto'
import {AppLoading} from 'expo';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
     <Routes />
    </>
  );
}


