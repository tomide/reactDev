import React , { useState, FC } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IProps {
    userName: string;
    userDob: string;
    userBio: string;
    onCancelUpdate: () => void;
    onSaveUpdate: () => void;
    updateUserName: (txt: string) => void;
    updateUserBio: (txt: string) => void;
    updateUserDob: (txt: string) => void;


}
const ProfileUpdatePage2: FC<IProps> = props => {

    const [userNameTemp, setUserNameTemp] = useState(props.userName); 
    const [userDobTemp, setUserDobTemp] = useState(props.userDob);
    const [userBioTemp, setUserBioTemp] = useState(props.userBio); 
 

    const updateUserNameTemp = (enteredText: string) => { 
        setUserNameTemp(enteredText) }   
    
    const updateUserDobTemp = (enteredText: string) => { 
        setUserDobTemp(enteredText) }

    const updateUserBioTemp = (enteredText: string) => { 
        setUserBioTemp(enteredText) } 

    const onCancelButton = () => {
      props.onCancelUpdate();
      updateUserNameTemp(props.userName);
      updateUserDobTemp(props.userDob);
      updateUserBioTemp(props.userBio); 
    }

    const onSaveButton = () => {
      if (userNameTemp.length >= 1) {
        props.updateUserName(userNameTemp)
        }
      if (userBioTemp.length >= 1) {
        props.updateUserBio(userBioTemp)
        }
      if (userDobTemp.length >= 1) {
        props.updateUserDob(userDobTemp)
        }
    props.onSaveUpdate();
    }

    return (
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
                                        value={userNameTemp}
                                    />                        
                                </View>

                        </View>


                        <View style={styles.LabelInputPair}> 

                                <View style={styles.labelBox}> 
                                    <Text style={styles.TextStyle} > Dob : </Text> 
                                </View> 
                                <View> 
                                    <TextInput 
                                        style={styles.InputBox} 
                                        placeholder=""
                                        onChangeText={updateUserDobTemp}
                                        value={userDobTemp} 
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
                                        value={userBioTemp} 
                                    />                       
                                </View>

                        </View>
                </View> 
            </View>
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

export default ProfileUpdatePage2;