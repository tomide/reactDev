import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const EditButton = props => {
    return (
    <TouchableOpacity style={styles.editTouchable} 
                    onPress ={props.updateProfile} > 
        <View >
            <Text style={styles.inputText} > Edit Profile </Text>
        </View >
    </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    inputText : {
      fontSize  : 30,
      fontFamily: 'Helvetica'
    },
    editTouchable :{
        backgroundColor : "lightblue",
        height: "10%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default EditButton;