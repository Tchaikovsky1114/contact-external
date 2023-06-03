import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { colors } from '../../colors';
import { DEFAULT_IMAGE } from '../../constants/constants';


const MemberCard = ({staffName,photoFile,item, handleShowModal }) => {
  const { width } = useWindowDimensions();
  
  return (
    <TouchableOpacity
      style={[styles.container,{
        width: width < 330 ? 51 : (width < 500 && Platform.OS === 'android') ? 68 : (width < 500 && Platform.OS === 'ios') ? 64 : 120,
        borderColor: colors.default,
      }]}
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
            DEFAULT_IMAGE,
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

export default React.memo(MemberCard);

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    backgroundColor: '#f6f4f6',
    borderRadius: 8,
    elevation: 5,
    borderWidth: 1,
    shadowRadius: 4,
    shadowOpacity: 0.8,
    shadowColor:'#c7c7c7'
  }
})