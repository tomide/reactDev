import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';


const ProfilePicture = props => {

    const updateStoreLocationAndImage = () => {
        props.updateStoreLocation("profile_picture");
        props.onClickAddImages()
    }

    return (
        <TouchableOpacity onPress = {updateStoreLocationAndImage}>
            <View style={styles.box}>
            <Image
            source = {{uri: props.profileImage}}
        //   source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
          //borderRadius style will help us make the Round Shape Image
          style={styles.circleSection} />
            </View>
        </TouchableOpacity>
    );}

const styles = StyleSheet.create({
    box: {
        width: '50%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10%',
        marginTop: '30%',
    },
      circleSection:{
        width: '100%', 
        height: '100%', 
        borderRadius: 10 / 2 ,   
        padding: "50%", 
        marginTop: '50%'
      }
  });

  export default ProfilePicture;