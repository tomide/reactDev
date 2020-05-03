import React , { useState, useEffect } from 'react';
import { StyleSheet, View , FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, Stack} from './Screens/ProfileScreen';
  
export default function App () {


const CameraScreen = () => (
  <CameraHandler  
    visible={false}
    hasPermission={hasPermission}
    pickImage={pickImage}
    switchCamera={switchCamera}
    type={type}
    imageFromCamera={imageFromCamera}
    closeClose={closeClose}    
  /> 
)
        return (
          <NavigationContainer >
            <Stack.Navigator headerMode="none" mode="modal">
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="CameraScreen" component={CameraScreen} />
            </Stack.Navigator>
          </NavigationContainer>

        )
      };

