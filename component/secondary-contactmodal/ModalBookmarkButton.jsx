import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import starImage from '../../assets/star.png'
const ModalBookmarkButton = ({
  isMyNameInContact,
  Icon,
  iconName1,
  iconName2,
  width,
  accentColor,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isMyNameInContact ? (
        <Icon
        name={iconName2}
        size={width < 330 ? 32 : width < 440 ? 32 : 36}
        color={accentColor}
      />
      ) : (
        <View style={{width: width < 330 ? 32 : width < 440 ? 32 : 36}}>
        <Icon
          name={iconName1}
          size={width < 330 ? 28 : width < 440 ? 28 : 32}
          color="#000"
        />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ModalBookmarkButton);
