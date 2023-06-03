import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DirectModalOuter = ({children}) => {
  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}

export default React.memo(DirectModalOuter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  }
})