import { View, Text } from 'react-native'
import React from 'react'

const DirectModalMemberLayout = ({children}) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',flexWrap:'wrap',columnGap:12,margin:4}}>
      {children}
    </View>
  )
}

export default React.memo(DirectModalMemberLayout);