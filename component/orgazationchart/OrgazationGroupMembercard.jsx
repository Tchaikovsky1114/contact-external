import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { colors } from '../../colors';


const OrgazationGroupMembercard = ({staffName,photoFile,item, handleShowModal }) => {
  const { width } = useWindowDimensions();
  
  return (
    <TouchableOpacity
      style={{
        width: width < 330 ? 51 : (width < 500 && Platform.OS === 'android') ? 68 : (width < 500 && Platform.OS === 'ios') ? 64 : 120,
        alignItems: 'center',
        gap: 4,
        paddingVertical: 4,
        backgroundColor: '#f6f4f6',
        borderRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.default,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.8,
        shadowColor:'#c7c7c7'
      }}
      onPress={() => handleShowModal(item) }
    >
      <View style={{width: width < 330 ? 40 : width < 500 ? 56 : 88, height: width < 330 ? 40 : width < 500 ? 56 : 88, overflow:'hidden',borderRadius: 99}}>
      <Image
        
        borderRadius={96}
        resizeMode="contain"
        style={{ width: width < 330 ? 40 : width < 500 ? 56 : 88, height: width < 330 ? 40 : width < 500 ? 56 : 88 }}
        source={{
          uri:
            photoFile ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSh9s2UMxgcMJ417twyLUHHpRn8ofO4nJU1A&usqp=CAU',
        }}
      />
      </View>
      <Text
        
        style={{
          fontWeight: 'bold',
          fontSize: width < 500 ? 14 : 20,
          color: colors.default,
        }}
      >
        {(width < 500 && staffName) ?  staffName.substr(0,3) : staffName}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(OrgazationGroupMembercard);
