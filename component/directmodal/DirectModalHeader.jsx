import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'

import { colors } from '../../colors'

const DirectModalHeader = () => {
  const { width } = useWindowDimensions()
  return ( 
    <View
    style={{
      width: '96%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: width < 330 ? 4 : 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.default,
      position:'relative',
    }}
  >
    <Text style={{fontSize: width < 330 ? 24 : 32,fontWeight: 'bold',color: colors.default,}}>
      다이랙트 콜
    </Text>
  </View>
  )
}

export default React.memo(DirectModalHeader);

