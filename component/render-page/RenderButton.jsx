import { Pressable, StyleSheet} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

export default function RenderButton({showChart,imageUrl,width}) {
  const navigation = useNavigation();
  return (
    <Pressable
    onPress={() => navigation.navigate('Organization',{showChart})}
    style={({ pressed }) => [
      Platform.OS === 'android' ? styles.button : styles.button_ios,
      {
        backgroundColor: pressed ? '#453f85df' : '#fff',
        width: '33%',
      },
    ]}
  >
    <Image source={imageUrl} style={{width: width < 500 ? '100%' : '60%', height:width < 500 ? 24 : 32}} />
  </Pressable>
  )
}

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
    height: 64,
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