import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ProfileDetails = props => {

    return (
    <View style = {styles.container}> 
        <Text style = {styles.usernameTextStyle} > {props.Name} </Text>
        <Text style = {styles.ageTextStyle} > {props.Age} </Text>
        <Text style = {styles.bioTextStyle} > {props.Bio} </Text>
    </View>
    );}

const styles = StyleSheet.create({
    container: {

      flexDirection : "column",
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height : '100%',
      width : '100%',      
    },
    usernameTextStyle : {
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        fontSize: 15,
        margin : '2%',
        alignItems: "flex-start"
    },
    ageTextStyle : {
        fontFamily: 'Arial',
        fontSize: 15,
        margin : '2%',
        alignItems: "flex-start"
    },
    bioTextStyle : {
        fontFamily: 'Arial',
        fontSize: 15,
        margin : '2%',
        alignItems: "flex-start"
    }
  });

  export default ProfileDetails;