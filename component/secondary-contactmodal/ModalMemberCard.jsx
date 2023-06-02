import { View, Image } from 'react-native';
import React from 'react';
import ModalTextGroup from './ModalTextGroup';

const ModalMemberCard = ({ memberInfo, accentColor, width }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: width < 430 ? 12 : 24,
        alignItems: 'center',
      }}
    >
      <Image
        borderRadius={12}
        style={{
          width: width < 330 ? 120 : 160,
          height: width < 330 ? 120 : 160,
        }}
        resizeMode="contain"
        source={{
          uri: memberInfo.photo_file
            ? memberInfo.photo_file
            : 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png',
        }}
      />
      <ModalTextGroup memberInfo={memberInfo} accentColor={accentColor} />
    </View>
  );
};

export default React.memo(ModalMemberCard);
