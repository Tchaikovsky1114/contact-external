import { StyleSheet, View } from 'react-native'
import React from 'react'

const ModalInnerLayout = ({accentColor,children,width}) => {
  return (
    <View
      style={[styles.container, { width: width < 430 ? '96%' : '70%', borderColor: accentColor }]}
    >
      {children}
    </View>
  )
}

export default React.memo(ModalInnerLayout);

const styles = StyleSheet.create({
  container: {
    height: 280,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 32,
    paddingTop: 16,
    elevation: 5,
    position: 'relative',
    borderWidth:1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    shadowColor:'#777'
  }
})