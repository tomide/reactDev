import React , { useState, useEffect } from 'react';
import { StyleSheet, View , FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, Stack, RootStackParamList} from './Screens/ProfileScreen';
import CameraHandler from './Screens/Camera';

export default function App () {

        return (
          <NavigationContainer >
            <Stack.Navigator headerMode="none" mode="modal">
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="CameraScreen" component={CameraHandler} />
            </Stack.Navigator>
          </NavigationContainer>

        )
      };

