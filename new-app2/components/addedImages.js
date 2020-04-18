import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const AddedImage = props => {

    const width = () => "33.3%";

    return (
        <TouchableOpacity onLongPress={props.onDelete}>
            <Image style = {[styles.imageSize, {width : wp(width())}]} source = {{uri: props.image}} />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    imageSize :{
        height: hp('10%'), // 70% of height device screen
        // width: wp('32.5%') ,  // 80% of width device screen
        marginRight: '0.33%',
        marginBottom: '0.5%',
    }
});

export default AddedImage;