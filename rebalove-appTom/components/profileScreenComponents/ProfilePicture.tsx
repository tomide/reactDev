import React, { FC } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface IProps {
    profileImage: string;
    onPressHandle: () => void;
  }

const ProfilePicture: FC<IProps> = props => {

    return (
        <TouchableOpacity onPress={props.onPressHandle}>
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