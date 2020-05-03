import React, { FC } from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IProps {
    image: string;
    // onDelete: () => void;
  }

const width = () => '33.3%';

const AddedImage: FC<IProps> = props => {

    
    return (
        <TouchableOpacity 
        // onLongPress={props.onDelete} 
        >
            <Image 
                style={[styles.imageSize, {width:wp(width())}]} 
                source={{uri: props.image}} 
            />
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