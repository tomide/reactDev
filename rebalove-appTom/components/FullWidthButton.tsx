import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  backgroundColor: string;
  buttonText: string;
  onPressHandler: () => void;
}

const FullWitdthButton: FC<IProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={props.onPressHandler}
    >
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 25,
    width: '100%',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FullWitdthButton;
