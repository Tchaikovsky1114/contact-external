import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

import { buttonColors } from '../../colors';
import { Pressable } from 'react-native';

const OrgazationHeaderTabButton = ({ setTabIndex, index, item, tabIndex }) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      
      onPress={() => setTabIndex(index)}
      style={({ pressed }) => [
        Platform.OS === 'android' ? styles.button : styles.button_ios,
        {
          backgroundColor: pressed ? buttonColors[0] : '#fff',
          flex:1,
          paddingVertical: width < 330 ? 8 : 16,
          borderWidth : index === tabIndex ? 1 : 0,
          borderColor : index === tabIndex ? buttonColors[0] : '#fff',
          paddingHorizontal:width < 330 ? 4 : 4,
        },
      ]}
    >
      {item === 'stayrak' ? (
        <Text style={{fontWeight:'bold',fontSize: width < 330 ? 14 : width < 500 ? 16 : 18}}>푸드몰</Text>
      ) : item === 'swadpia' ? (
        <Text style={{fontWeight:'bold',fontSize: width < 330 ? 10 : width < 500 ? 16 : 18}} numberOfLines={1}>애드피아</Text>
      ) : item === 'adpiamall' ? (
        <Text style={{fontWeight:'bold',fontSize: width < 330 ? 14 : width < 500 ? 16 : 18}}>몰</Text>
      ) : null}
    </Pressable>
  );
};

export default React.memo(OrgazationHeaderTabButton);

const styles = StyleSheet.create({
  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 6,
    elevation: 3,
    paddingHorizontal:4,
  },
  button_ios : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 6,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    backgroundColor:'#fff',
    shadowColor: '#ccc',
    paddingHorizontal:4,
  }
})