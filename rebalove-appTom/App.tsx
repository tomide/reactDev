import React , { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, Stack} from './Screens/ProfileScreen';
import CameraHandler from './Screens/Camera';
import { IAppContextInterface, AppContextProvider } from './components/profileScreenComponents/ProfileContext';

const sampleAppContext: IAppContextInterface = {
  location: 'test',
  imgl: []
};


export default function App () {


        return (
          <AppContextProvider value={sampleAppContext}>
          <NavigationContainer >
            <Stack.Navigator headerMode="none" mode="modal">
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="CameraScreen" component={CameraHandler} />
            </Stack.Navigator>
          </NavigationContainer>  
          </AppContextProvider>

        )
      };

