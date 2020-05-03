import React, { FC } from 'react';
import { Button } from 'react-native-elements';

interface IProps {
  disabled: boolean;
  buttonText: string;
  onPressHandler: () => void;
}

const FormButton: FC<IProps> = props => {
  return (
    <Button
      onPress={props.onPressHandler}
      title={props.buttonText}
      titleStyle={{ fontWeight: '500' }}
      buttonStyle={{ borderRadius: 40, padding: 10 }}
      containerStyle={{ width: '90%' }}
      disabled={props.disabled}
    />
  );
};

export default FormButton;
