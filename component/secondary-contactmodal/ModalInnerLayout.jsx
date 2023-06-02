import { View } from 'react-native'
import React from 'react'

const ModalInnerLayout = ({accentColor,children,width}) => {
  return (
    <View
          style={{
            width: width < 430 ? '96%' : '70%',
            height: 280,
            backgroundColor: '#fff',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 32,
            paddingTop: 16,
            elevation: 5,
            position: 'relative',
            borderWidth:1,
            borderColor:accentColor,
            shadowOffset: {
              width: 4,
              height: 4,
            },
            shadowRadius: 4,
            shadowOpacity: 0.8,
            shadowColor:'#777'
          }}
        >
      {children}
    </View>
  )
}

export default React.memo(ModalInnerLayout);