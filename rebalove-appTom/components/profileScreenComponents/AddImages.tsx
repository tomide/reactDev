import React , { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface IProps {
    onClickAddImages: () => void;
  }

const addImageButton: FC<IProps>  = props => {
    return (
        <TouchableOpacity onPress = {props.onClickAddImages}>
            <View style = {styles.box}>
                <Text style = {styles.inputText}> Upload Photo </Text>
            </View>
        </TouchableOpacity>
    );}

const styles = StyleSheet.create({

    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    inputText : {
        fontSize  : 30,
        fontFamily: 'Helvetica'
      },
  });

  export default addImageButton;