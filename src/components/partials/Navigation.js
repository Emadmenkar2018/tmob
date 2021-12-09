import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@pages/Home";
import PlaylistPage from "@pages/PlaylistPage";
import { useSelector } from 'react-redux';
import { Alert } from "react-native";


const HomeStack = createNativeStackNavigator();


const HomeStackNavigator = () => {

  const { error } = useSelector(state => state.playlists);


  /**
   * Render Delivery item inside FLatList
   * 
   * @param {object} item
   * @param {String} index
  */
  useEffect(() => {
    if (error) {
      Alert.alert('Something Wrong')
    }
  }, [error])

  return (
    <HomeStack.Navigator testID="nav" mode="modal" initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="PlaylistPage"
        component={PlaylistPage}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
}
 

export default HomeStackNavigator;