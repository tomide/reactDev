import React , { useState, useEffect } from 'react'
import { StyleSheet, Text, View , FlatList, Modal, Image, Dimensions} from 'react-native'
import ProfileDetails from './components/currentProfileDetails'
import EditButton from './components/editProfileButton'
import AddedImage from  './components/addedImages'
import CameraHandler from  './components/camera'
import ImagePreviewer from  './components/imagePreview'
import ProfileEditPage from  './components/profileEditPage'
import ProfilePicture from  './components/profilePicture'
import AddImageButton from './components/addImagesButton'
import {ActionSheet, Root} from "native-base"
import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'
// import Constants from 'expo-constants'
import { Camera } from 'expo-camera'
import {AppLoading } from 'expo'
// import { v4 as uuidv4 } from 'uuid';

import { Buffer } from 'buffer';
global.Buffer = Buffer; // very important




export default function App() {
  const[storeImage, setStoreImage] = useState('')
  const [profilePageState, setProfilePageState] = useState(false)  
  const [cameraScreenState, setCameraScreenState] = useState(false)
  const [previewScreenState, setPreviewScreenState] = useState(false)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [columns_needed, setColumns_needed] = useState(3)
  // const uuid = require('react-native-uuid')
  const [imageList, setImageList] = useState([])
  const [profileImage, setProfileImage] = useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png')
  const [previewImage, setPreviewImage ]= useState(null)
  const [userName, setUserName] = useState('Young Tom')
  const [userDob, setUserDob] = useState('1990/03/01') 
  const [userBio, setUserBio] = useState('Life is good on this side') 

  const UUID = (function() {
    var self = {};
    var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
    self.generate = function() {
      var d0 = Math.random()*0xffffffff|0;
      var d1 = Math.random()*0xffffffff|0;
      var d2 = Math.random()*0xffffffff|0;
      var d3 = Math.random()*0xffffffff|0;
      return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
        lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
    }
    return self;
  })();

  const updateProfile = () => {
    setProfilePageState(true);  }

  const updateUserName = (enteredText) => { 
    setUserName(enteredText) }

  const updateUserBio = (enteredText) => { 
    setUserBio(enteredText) }    
  
  const updateUserDob = (enteredText) => { 
    setUserDob(enteredText) }

  const onCancelUpdate = () => {
    setProfilePageState(false);  
    }

  const onSaveUpdate = () => {
    setProfilePageState(false);  
    }

  const closeClose = () => {
    setCameraScreenState(true) 
  }

  const updateStoreLocation = (location) => {
      setStoreImage(location)
  }
  const imageFromCamera = (img) => {
    setPreviewImage(img.uri);
    setCameraScreenState(false) 
    setPreviewScreenState(true)                          
  }

  const acceptImage = (img) => {
    if (storeImage === "other_pictures") { 

    setImageList(newImg => [...newImg, { key: UUID.generate(), value: img}]); 
    console.log(imageList);
  }
  if (storeImage === "profile_picture") { 

    setProfileImage(img); 
    console.log(img);
  }
    setPreviewScreenState(false)
    setCameraScreenState(false)

  }
  
  const takeNewPicture = () => {
    setPreviewScreenState(false) ;
    setCameraScreenState(true) ;
   }

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1   
    });
    if (!result.cancelled) {
              if (storeImage === "other_pictures") {

              setImageList(newImg => [...newImg, { key: UUID.generate(), value: result.uri}]); 
              console.log(imageList); 
            }
              if (storeImage === "profile_picture") {

                    setProfileImage(result.uri); 
                    console.log(result.uri); 
            }

        setCameraScreenState(false)                           
        }
  }

const switch_camera = () => {
      setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }

const onClickAddImages = () => {
  setCameraScreenState(true)
            }

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const deleteImageHandler = (imgId) => {
    setImageList(imagelist => {
      return imagelist.filter((img) => img.key !== imgId);
    } );
  }

  const onClickAddedImages = (imgkey) => {
       const BUTTONS = ["Yes - Delete photo", "Cancel"]
            ActionSheet.show(
              {options: BUTTONS, cancelButtonIndex: 2, title:"Delete a Photo"}, 
                buttonIndex => {
                    switch (buttonIndex) {
                      case 0:
                        deleteImageHandler(imgkey);
                      case 1:
                        break;
                      default:
                        break   }
                        }
                )
          };

        return (
        <Root> 
          <View style={styles.screen}>

                <View style={styles.profilePictureSection}>
                <ProfilePicture profileImage={profileImage}
                updateStoreLocation={updateStoreLocation}
                onClickAddImages = {onClickAddImages} />
                {/* <Text style={styles.inputText} > testing </Text> */}
                </View>

                <View style={styles.profileDetailSection}>
                    <ProfileDetails Name={userName}
                    Age={userDob}
                    Bio={userBio}/>
                </View >

                <EditButton updateProfile = {updateProfile} />

                <ProfileEditPage  visible = {profilePageState} 
                                  userName = {userName}
                                  userBio = {userBio}
                                  userDob = {userDob}  
                                  updateUserName = {updateUserName}
                                  updateUserBio = {updateUserBio}
                                  updateUserDob = {updateUserDob} 
                                  onCancelUpdate = {onCancelUpdate} 
                                  onSaveUpdate = {onSaveUpdate} />
                            
                <View style={styles.uploadedPictureSection} > 

                      <FlatList data = {imageList} 
                          numColumns = {columns_needed}
                          renderItem = {itemData => 
                          <AddedImage 
                          onDelete = {onClickAddedImages.bind(this,itemData.item.key)}
                          image={itemData.item.value} /> }
                        />
                </View>
               <CameraHandler visible = { cameraScreenState } 
               hasPermission = {hasPermission}
               pickImage = {pickImage}
               switch_camera = {switch_camera}
               type ={type}
               imageFromCamera = {imageFromCamera}
               closeClose = {closeClose}
              />
           <AddImageButton updateStoreLocation={updateStoreLocation} 
           onClickAddImages = {onClickAddImages} />
          
          <ImagePreviewer visible = { previewScreenState } 
          acceptImage = {acceptImage}
          takeNewPicture = {takeNewPicture}
          image = {previewImage} />

          </View>

        </Root>

        );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection:"column",
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: "#ffffe4",
    height: "100%",
    width: "100%",
  },
  profilePictureSection :{
    flexDirection: "column",
    backgroundColor : "#ffffe4",
    justifyContent: 'center',
    alignItems: 'center',
    height: "45%",
    width: "100%"
  },
  profileDetailSection :{
    backgroundColor : "#ffffe4",
    height: "15%",
    width: "100%"
  },
  uploadedPictureSection :{
    flexDirection: "row",
    backgroundColor : "#ffffe4",
    height: "45%",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: "100%"
  },
inputText : {
    fontSize  : 50,
    paddingTop: "50%",
    color:"black",
    fontFamily: 'Helvetica',
    justifyContent: "flex-end",
    alignItems:"center"
  }
});
