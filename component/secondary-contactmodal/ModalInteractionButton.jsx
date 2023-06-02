import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

const ModalInteractionButton = ({
  onPress,
  icon,
  width,
}) => {
  return (
    <TouchableOpacity
    style={ { padding:8 } }
    onPress={onPress}>
      
      <Image
        source={icon}      
        style={{ width:width < 330 ? 32 : width < 500 ? 32 : 48, height:width < 330 ? 26 : width < 500 ? 26 : 36}}
      />
      
    </TouchableOpacity>
  );
};

export default React.memo(ModalInteractionButton);
