import React, { FC } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

interface IProps {
    profileImage: string;
    updateStoreLocation: (location: string) => void;
    onClickAddImages: () => void;
  }

const ProfilePicture: FC<IProps> = props => {

    const updateStoreLocationAndImage = () => {
        props.updateStoreLocation('profile_picture');
        props.onClickAddImages()
    }

    return (
        <TouchableOpacity onPress={updateStoreLocationAndImage}>
            <View style={styles.box}>
            <Image
              source={{uri: props.profileImage}}
              style={styles.circleSection} 
            />
            </View>
        </TouchableOpacity>
    );}

const styles = StyleSheet.create({
    box: {
        width: '50%',
        height: '30%',
        justifyContent: 'space-around',
        borderRadius: 10 / 2 ,   
        alignItems: 'center',
        padding: '10%',
    },
      circleSection:{
        width: '100%', 
        height: '100%', 
        padding: '50%', 
        marginTop: '10%'
      }
  });

  export default ProfilePicture;