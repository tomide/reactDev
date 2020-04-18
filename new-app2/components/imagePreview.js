import React, { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, Text, View, TouchableOpacity , Modal, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImagePreviewer = props => {
  
  const acceptImage = () => {
    props.acceptImage(props.image);
  }
  const takeNewPicture = () => {
    props.takeNewPicture(props.image);
  }

  return (
          <Modal visible = {props.visible} animationType="fade" > 
              <ImageBackground style={styles.imageSize} source = {{ uri: props.image}} >
                
                <View style={styles.pageLayout} > 
                  <TouchableOpacity onPress = {acceptImage} > 
                      <Text style={styles.acceptTextPosition} > Choose </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress = {takeNewPicture} > 
                    <Text style={styles.cancelTextPosition} > Camera </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
          </Modal>
        );
      }

const styles = StyleSheet.create({
  imageSize :{
      width: wp ('100%'),
      height: hp('100%'), // 70% of height device screen
  },
  pageLayout:{
    flexDirection: "row-reverse"
  },
  cancelTextPosition:{
    padding: "10%",
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 30,
    color: 'white',
    fontWeight:"bold"

  },
  acceptTextPosition:{
    padding: "10%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 30,
    color: 'white',
    fontWeight:"bold"
  }

});

export default ImagePreviewer;