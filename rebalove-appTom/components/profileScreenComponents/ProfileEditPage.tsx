import React , { useState, FC } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IProps {
    visible: boolean;
    userName: string;
    userAge: string;
    userBio: string;
    onCancelUpdate: () => void;
    onSaveUpdate: () => void;
    updateUserName: (txt: string) => void;
    updateUserBio: (txt: string) => void;
    updateUserAge: (txt: string) => void;


}
const ProfileUpdatePage: FC<IProps> = props => {

    const [userNameTemp, setUserNameTemp] = useState(props.userName); 
    const [userAgeTemp, setUserAgeTemp] = useState(props.userAge);
    const [userBioTemp, setUserBioTemp] = useState(props.userBio); 
 

    const updateUserNameTemp = (enteredText: string) => { 
        setUserNameTemp(enteredText) }   
    
    const updateUserAgeTemp = (enteredText: string) => { 
        setUserAgeTemp(enteredText) 
    }

    const updateUserBioTemp = (enteredText: string) => { 
        setUserBioTemp(enteredText) } 

    const onCancelButton = () => {
      props.onCancelUpdate();
      updateUserNameTemp(props.userName);
      updateUserAgeTemp(props.userAge);
      updateUserBioTemp(props.userBio); 
    }

    const onSaveButton = () => {
      if (userNameTemp.length >= 1) {
        props.updateUserName(userNameTemp)
        }
      if (userBioTemp.length >= 1) {
        props.updateUserBio(userBioTemp)
        }
      if (userAgeTemp.toString.length >= 1) {
        props.updateUserAge(userAgeTemp)
        }
    props.onSaveUpdate();
    }

    return (
      <Modal visible={props.visible} animationType="slide"> 
         <View style={styles.inputContainer} > 
                <View style={styles.ButtonLayout} >

                    <View style={styles.cancelTextPosition}> 
                        <TouchableOpacity onPress={onCancelButton} > 
                            <Text style={styles.Cancel}> Cancel </Text>
                        </TouchableOpacity> 
                    </View>

                    <View style={styles.acceptTextPosition}> 
                        <TouchableOpacity onPress={onSaveButton}> 
                            <Text style={styles.Done}> Done </Text>
                        </TouchableOpacity> 
                    </View>

                </View>

                <View style={styles.Page}> 

                        <View style={styles.LabelInputPair}> 

                                <View style={styles.labelBox}> 
                                    <Text style={styles.TextStyle} > User Name : </Text> 
                                </View>
                                <View> 
                                    <TextInput 
                                        style={styles.InputBox} 
                                        placeholder="Enter UserName"
                                        onChangeText={updateUserNameTemp}
                                        multiline={true}
                                        numberOfLines={10}
                                        value={userNameTemp} 
                                    />                        
                                </View>

                        </View>


                        <View style={styles.LabelInputPair}> 

                                <View style={styles.labelBox}> 
                                    <Text style={styles.TextStyle} > Age : </Text> 
                                </View> 
                                <View> 
                                    <TextInput 
                                        style={styles.InputBox} 
                                        placeholder="How old are you"
                                        onChangeText={updateUserAgeTemp}
                                        multiline={false}
                                        value={userAgeTemp} 
                                    />                        
                                </View>

                        </View>


                        <View style={styles.LabelInputPair}> 
                                <View style={styles.labelBox}> 
                                    <Text style={styles.TextStyle} > Bio : </Text>  
                                </View>
                                <View> 
                                    <TextInput 
                                        style={styles.InputBox} 
                                        placeholder="Tell me something about you"
                                        onChangeText={updateUserBioTemp}
                                        multiline={true}
                                        numberOfLines={10}
                                        value={userBioTemp} 
                                    />                       
                                </View>

                        </View>
                </View> 
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({

    inputContainer: {
      flexDirection: 'column',
      paddingTop: '5%',
    },

    Page: {
        flexDirection:'column',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'), // 70% of height device screen
    },
    TextStyle :{
        fontSize: 20,
        height: hp('5%'), // 70% of height device screen
    },
    InputBox:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 20,
        // backgroundColor: 'grey',
        // borderBottomWidth: 1,
        height: hp('5%'), // 70% of height device screen
    },
    ButtonLayout:{
        flexDirection: 'row'
      },
    cancelTextPosition:{
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('10%'), // 70% of height device screen
        width: wp('50%'), // 70% of height device screen
    },
    acceptTextPosition:{
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('10%'), // 70% of height device screen
        width: wp('50%'), // 70% of height device screen
    },
    Done :{
        fontSize: 20,
        color: 'blue'
    },
    Cancel:{
        fontSize: 20,
        color: 'black'
    },
    LabelInputPair:{
        flexDirection: 'row',
        width: wp('100%'),

    },
    labelBox: {
        paddingTop: '2%',
        height: hp('10%'), // 70% of height device screen
        width: wp('30%'), // 70% of height device screen
        // backgroundColor: 'lightgreen',
        marginBottom: '1%',
        alignItems:'flex-start'
    }
  });

export default ProfileUpdatePage;