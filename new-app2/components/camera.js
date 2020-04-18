import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity , Modal} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CameraHandler = props => {
    

const snap = async () => {
    if (this.camera) {
    let result = await this.camera.takePictureAsync({
      });  
    console.log(result)
    props.imageFromCamera(result)
    
}
      };



  if (props.hasPermission === null) {
    return <View />;
  }
  if (props.hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Modal visible = {props.visible} animationType="slide" > 

        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} 
            type={props.type} 
            ref={ref => {this.camera = ref}}>
             
             <TouchableOpacity
                    style={{
                        alignSelf: 'flex-start',
                        alignItems: 'flex-start',
                        paddingLeft: '8%',
                        backgroundColor: 'transparent',
                    }} onPress={props.closeClose}>
                <Text style = {{color: "white"}}>Cancel</Text>
            </TouchableOpacity>

            <View style={{flex:1, flexDirection:"row",
                    justifyContent:"space-between",margin:30}}  >

                <TouchableOpacity
                    style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',                  
                    }} onPress={props.pickImage} >
                    <Ionicons
                        name="ios-photos"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    }} onPress={() => snap()}>
                    <FontAwesome
                        name="camera"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    }} onPress={props.switch_camera} >
                    <MaterialCommunityIcons
                        name="camera-switch"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                </TouchableOpacity>
                </View>            
        </Camera>
    </View>
</Modal>
  );
}

export default CameraHandler;