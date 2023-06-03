import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalInnerLayout from './ModalInnerLayout';
import ImageButton from './ImageButton';
import ButtonGroupLayout from './ButtonGroupLayout';
import ModalMemberCard from './ModalMemberCard';
import ModalBookmarkButton from './BookmarkButton';
import mobile from '../../assets/mobile.png'
import telephone from '../../assets/telephone.png'
import message from '../../assets/message.png'

const ModalInner = ({
  width,
  accentColor,
  logoImage,
  memberInfo,
  pressCall,
  pressSMS,
  isMyNameInContact,
  pressBookmark,
  tabIndex
}) => {
  
  return (
    <TouchableWithoutFeedback>
      <ModalInnerLayout accentColor={accentColor} width={width}>
        
        <ModalMemberCard
          accentColor={accentColor}
          memberInfo={memberInfo}
          width={width}
        />
        <ButtonGroupLayout width={width} accentColor={accentColor}>
          {memberInfo.mobile && (
            <ImageButton
              width={width}
              onPress={() => pressCall(memberInfo.mobile,tabIndex)}
              icon={mobile}
            />
          )}
          {memberInfo.office_phone && (
            <ImageButton
              width={width}
              onPress={() => pressCall(memberInfo.office_phone,tabIndex)}
              icon={telephone}
            />
          )}
          {memberInfo.mobile && (
            <ImageButton
              width={width}
              onPress={() => pressSMS(memberInfo.mobile)}
              icon={message}
            />
          )}
          <ModalBookmarkButton
            onPress={() => pressBookmark(memberInfo)}
            Icon={Ionicons}
            iconName1="star-outline"
            iconName2="star-sharp"
            width={width}
            accentColor="#F9F871"
            isMyNameInContact={isMyNameInContact}
          />
        </ButtonGroupLayout>
      </ModalInnerLayout>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(ModalInner);
