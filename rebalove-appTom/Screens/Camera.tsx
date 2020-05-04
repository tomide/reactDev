import React, { FC, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoBackButton from '../components/GoBackButton';
import * as ImagePicker from 'expo-image-picker';
import { IAppContextInterface,AppContextConsumer, AppContextProvider } from '../components/profileScreenComponents/ProfileContext';


// interface IProps {
//     // visible: boolean;
//     // hasPermission: boolean;
//     // type: string;
//     // imageFromCamera: (img:string) => void;
//     // pickImage: () => void;
//     // closeClose: () => void;
//     // switchCamera: () => void;
//   }

  type CameraNavigationProp = StackNavigationProp<RootStackParamList,'CameraScreen'>;

  interface ICameraProps {
    navigation: CameraNavigationProp;
  }

const CameraHandler: FC<ICameraProps> = props => {

    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        // tslint:disable-next-line: no-floating-promises
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status  === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        const result:ImagePicker.ImagePickerResult = await 
                ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1   
        });
        if (result.cancelled === false){
        props.navigation.replace('Home')
        return result.uri;
        }
    }

    const switchCamera = () => {
        setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
            }  
        
    const cameraRef = React.createRef<Camera>();

    const snap = async (newList: Array<{key: string, value: string}>) => {
        if (cameraRef.current) {
        const result = await cameraRef.current.takePictureAsync({
        });  
        newList.push({key:'test', value:result.uri})
        props.navigation.replace('Home')
        // return newList.push({key:'test', value:result.uri})
                }
        };

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <AppContextConsumer>
        {appContext => appContext &&  (
        <View style={{ flex: 1 }}>

            <Camera 
                style={{ flex: 1 }} 
                type={type} 
                ref={cameraRef} 
            >
                  
                    <View style={styles.bottomSection} >
                        <TouchableOpacity 
                            style={styles.topSection}
                        >
                            <GoBackButton 
                                onPressHandler={() => {props.navigation.replace('Home') }}
                            />
                        </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.iconSPacing}
                            onPress={() => pickImage()} 
                    >
                    <Ionicons
                            name="ios-photos"
                            style={{ color: '#fff', fontSize: 40}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.iconSPacing}
                            onPress={() => snap(appContext.imgl)}
                    >
                    <FontAwesome
                            name="camera"
                            style={{ color: '#fff', fontSize: 40}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconSPacing}
                        onPress={() => switchCamera()} 
                    >
                    <MaterialCommunityIcons
                        name="camera-switch"
                        style={{ color: '#fff', fontSize: 40}}
                    />
                    </TouchableOpacity>
                    </View>            
            </Camera>
        </View> 
        )}
    </AppContextConsumer>
            );
}

const styles = StyleSheet.create({
    topSection: {
        position: 'absolute',
        left: 5, 
        top: 5,
        color: '#fff'
    },
    bottomSection:{
        flex:1, 
        flexDirection:'row',
        justifyContent:'space-between',
        margin:30
    },
    iconSPacing:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
export default CameraHandler;