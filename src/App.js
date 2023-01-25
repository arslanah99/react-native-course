/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  BackHandler,
  Image,
  View,
} from 'react-native';
import HomeScreen from './components/pages/Home/Home';
import SelectedAnimeScreen from './components/pages/SelectedAnime/SelectedAnime';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={() => {
          return {
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitleStyle: {
              fontSize: 50,
              fontFamily: 'Montserrat-Light',
              color: 'yellow',
            },
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => BackHandler.exitApp()}>
                <Text>Exit APP</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{height: 50, width: 50}}>
                <Image 
                 style={{height: 50, width: 50}}
                source={{uri: 'https://images.unsplash.com/photo-1641831705160-5d56ac4094cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}}
                />
              </View>
            )
          };
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="SelectedAnime" component={SelectedAnimeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default App;
