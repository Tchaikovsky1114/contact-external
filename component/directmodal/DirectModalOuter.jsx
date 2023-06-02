import { View, Text } from 'react-native'
import React from 'react'

const DirectModalOuter = ({children}) => {
  return (
    <View
    
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  )
}

export default React.memo(DirectModalOuter)