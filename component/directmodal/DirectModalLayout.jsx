import { View } from 'react-native'
import React from 'react'

const DirectModalLayout = ({width,children}) => {
  return (
    <View
      style={{
        width: width < 330 ? '96%' : width < 500 ? '96%' : '80%',
        height: '80%',
        elevation: 5,
        backgroundColor: '#fff',
        padding: width < 330 ? 0 : 32,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
      }}
    >
      {children}
    </View>
  )
}

export default React.memo(DirectModalLayout);

