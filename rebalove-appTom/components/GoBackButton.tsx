import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

interface IProps {
  onPressHandler: () => void;
}

const GoBackButton: FC<IProps> = props => {
  return (
    <Button
      icon={<Icon name="chevron-left" size={22} color={'#007AFF'} />}
      type="clear"
      onPress={props.onPressHandler}
    />
  );
};

export default GoBackButton;
