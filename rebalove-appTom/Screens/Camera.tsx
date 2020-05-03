import React, { FC } from 'react';
import { Text, View, TouchableOpacity , Modal} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
    visible: boolean;
    hasPermission: boolean;
    type: string;
    imageFromCamera: (img:string) => void;
    pickImage: () => void;
    closeClose: () => void;
    switchCamera: () => void;
  }



const CameraHandler: FC<IProps> = props => {
    
const cameraRef = React.createRef<Camera>();

const snap = async () => {
    
    if (cameraRef.current) {
    const result = await cameraRef.current.takePictureAsync({
      });  
    props.imageFromCamera(result.uri)
    // console.log(result)
            }
      };

//   if (props.hasPermission === null) {
//     return <View />;
//   }
  if (props.hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (

<View style={{ flex: 1 }}>
            <Camera 
                style={{ flex: 1 }} 
                type={props.type} 
                ref={cameraRef} 
            >

                        <View 
                            style={{flex:1, flexDirection:'row',
                            justifyContent:'space-between',
                            margin:30}}  
                        >

                            <TouchableOpacity
                                style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',                  
                                }} 
                                onPress={props.pickImage} 
                            >
                                <Ionicons
                                    name="ios-photos"
                                    style={{ color: '#fff', fontSize: 40}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                }} 
                                onPress={() => snap()}
                            >
                                <FontAwesome
                                    name="camera"
                                    style={{ color: '#fff', fontSize: 40}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                }} 
                                onPress={props.switchCamera} 
                            >
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{ color: '#fff', fontSize: 40}}
                                />
                            </TouchableOpacity>
                        </View>            
        
            </Camera>

    </View>
  );
}

export default CameraHandler;