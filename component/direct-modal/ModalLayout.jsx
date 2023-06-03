import { StyleSheet, View } from 'react-native'
import React from 'react'

const DirectModalLayout = ({width,children}) => {
  return (
    <View
      style={[styles.container,{
        width: width < 330 ? '96%' : width < 500 ? '96%' : '80%',
        padding: width < 330 ? 0 : 32,
      }]}
    >
      {children}
    </View>
  )
}

export default React.memo(DirectModalLayout);

const styles = StyleSheet.create({
  container: {
    height: '80%',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  }
})

