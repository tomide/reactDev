import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const addImageButton = props => {

    const updateStoreLocationAndImage = () => {
        props.updateStoreLocation("other_pictures");
        props.onClickAddImages()
    }


    return (
        <TouchableOpacity onPress = {updateStoreLocationAndImage} >
            <View style = {styles.box}>
                <Text style = {styles.inputText}> upload pictures </Text>
            </View>
        </TouchableOpacity>
    );}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '30%',
        backgroundColor: "lightpink",
        justifyContent: 'space-around',
        alignItems: 'center'
 
    },
    inputText : {
        fontSize  : 30,
        fontFamily: 'Helvetica',
      },
  });

  export default addImageButton;