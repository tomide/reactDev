import React , { useState, useEffect , FC} from 'react';
import { StyleSheet, View , FlatList} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import ProfileDetails from '../components/profileScreenComponents/CurrentProfileDetails';
import FullWidthButton from '../components/FullWidthButton';
import CameraHandler from '../Screens/Camera';
import AddedImage from  '../components/profileScreenComponents/AddedImages';
import ImagePreviewer from  '../components/profileScreenComponents/ImagePreview';
import ProfileEditPage from  '../components/profileScreenComponents/ProfileEditPage';
import ProfileEditPage2 from  '../components/profileScreenComponents/ProfileEditPage2';
import ProfilePicture from  '../components/profileScreenComponents/ProfilePicture';
import {ActionSheet, Root} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { uuid } from 'uuidv4';
import { Camera } from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  CameraScreen: undefined;

}
export const Stack = createStackNavigator<RootStackParamList>();

type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface IHomeProps {
  navigation: HomeNavigationProp;
}

export const HomeScreen: FC<IHomeProps> = props => {
    
        const [storeImage, setStoreImage] = useState<string>('')
        const [profilePageState, setProfilePageState] = useState<boolean>(false)  
        const [cameraScreenState, setCameraScreenState] = useState<boolean>(false)
        const [previewScreenState, setPreviewScreenState] = useState<boolean>(false)
        const [hasPermission, setHasPermission] = useState(false);
        const [type, setType] = useState(Camera.Constants.Type.back)
        const [columns_needed, setColumns_needed] = useState<number>(3)
        const [imageList, setImageList] = useState <Array<{key: string, value: string}> >([])
        const [profileImage, setProfileImage] = useState<string>('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png')
        const [previewImage, setPreviewImage ]= useState('')
        const [userName, setUserName] = useState<string>('Young Tom')
        const [userAge, setUserAge] = useState<string>('26')
        const [userBio, setUserBio] = useState<string>('Life is good on this side') 

const updateProfile = () => {
  setProfilePageState(true);  }

const updateUserName = (enteredText: string) => { 
  setUserName(enteredText) }

const updateUserBio = (enteredText: string) => { 
  setUserBio(enteredText) }    

const updateUserAge = (enteredText: string) => { 
  setUserAge(enteredText)}

const onCancelUpdate = () => {
  setProfilePageState(false);  
  }

const onSaveUpdate = () => {
  setProfilePageState(false);  
  }

const closeClose = () => {
  setCameraScreenState(true) 
}

const updateStoreLocation = (location: string) => {
    setStoreImage(location)
}
const imageFromCamera = (img: string) => {
  setPreviewImage(img);
  setCameraScreenState(false) 
  setPreviewScreenState(true)                          
}

const acceptImage = (img: string) => {
  if (storeImage === 'other_pictures') { 

  setImageList(newImg => [...newImg, { key: uuid(), value: img}]); 
  // console.log(imageList);
}
if (storeImage === 'profile_picture') { 

  setProfileImage(img); 
  // console.log(img);
}
  setPreviewScreenState(false)
  setCameraScreenState(false)

}

const takeNewPicture = () => {
  setPreviewScreenState(false) ;
  setCameraScreenState(true) ;
 }

  const pickImage = async () => {
      const result:ImagePicker.ImagePickerResult = await 
              ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1   
      });
      if (result.cancelled === false && storeImage === 'other_pictures') {
              setImageList(newImg => [...newImg, { key: uuid(), value: result.uri}]); 
              // console.log(imageList); 
      }
      if (result.cancelled === false && storeImage === 'profile_picture') {
                      setProfileImage(result.uri); 
                      // console.log(result.uri); 
              }

          setCameraScreenState(false)                           
        }
  
      const switchCamera = () => {
          setType(
                      type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                  }

      const onClickAddImages = () => {
      setCameraScreenState(true)
                  }

      const onClickNavigateToCamera = () => {
      props.navigation.navigate('CameraScreen');
                  }

      useEffect(() => {
          // tslint:disable-next-line: no-floating-promises
          (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status  === 'granted');
          })();
      }, []);

const deleteImageHandler = (imgId: string) => {
  setImageList(imagelist => {
    return imagelist.filter((img) => img.key !== imgId);
  } );
}

const onClickAddedImages = (imgkey: string) => {
     const BUTTONS = ['Yes - Delete Photo', 'Cancel']
          ActionSheet.show(
            {options: BUTTONS, cancelButtonIndex: 2, title:'Delete Photo'}, 
              buttonIndex => {
                  switch (buttonIndex) {
                    case 0:
                      deleteImageHandler(imgkey);
                      break
                    case 1:
                      break;
                    default:
                      break   }
                      }
              )
        };

const styles = StyleSheet.create({
    screen: {
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ffffe4',
        height: '100%',
        width: '100%',
    },
    profilePictureSection :{
        flexDirection: 'column',
        backgroundColor : '#ffffe4',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '100%'
    },
    profileDetailSection :{
        backgroundColor : '#ffffe4',
        height: '15%',
        width: '100%'
    },
    uploadedPictureSection :{
        flexDirection: 'row',
        backgroundColor : '#ffffe4',
        height: '30%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },
    inputText : {
        fontSize  : 50,
        paddingTop: '50%',
        color:'black',
        fontFamily: 'Helvetica',
        justifyContent: 'flex-end',
        alignItems:'center'
    }
    });

  return (
        <View style={styles.screen}>
                <View style={styles.profilePictureSection}>
                    <ProfilePicture 
                        profileImage={profileImage}
                        updateStoreLocation={updateStoreLocation}
                        onClickAddImages={onClickAddImages} 
                    />
                </View>
        
                <View style={styles.profileDetailSection}>
                    <ProfileDetails 
                            Name={userName} 
                            Age={userAge} 
                            Bio={userBio}
                    />
                </View >
    
                <FullWidthButton 
                    backgroundColor="pink" 
                    buttonText="Edit Profile"        
                    onPressHandler={updateProfile} 
                />

                <ProfileEditPage  
                    visible={profilePageState} 
                    userName={userName}
                    userBio={userBio}
                    userAge={userAge}  
                    updateUserName={updateUserName}
                    updateUserBio={updateUserBio}
                    updateUserAge={updateUserAge} 
                    onCancelUpdate={onCancelUpdate} 
                    onSaveUpdate={onSaveUpdate}
                />

                <View style={styles.uploadedPictureSection} > 
                        <FlatList 
                                data={imageList} 
                                numColumns={columns_needed}
                                renderItem={itemData => <AddedImage image={itemData.item.value} />}
                        />
                </View>
                <FullWidthButton 
                        backgroundColor="pink" 
                        buttonText="Upload Photo"
                        onPressHandler={onClickNavigateToCamera} 
                />
        
                <ImagePreviewer 
                        visible={previewScreenState} 
                        acceptImage={acceptImage}
                        takeNewPicture={takeNewPicture} 
                        image={previewImage} 
                />
          </View>
  );
}