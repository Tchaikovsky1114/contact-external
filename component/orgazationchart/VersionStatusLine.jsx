import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const VersionStatusLine = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>v{Constants.expoConfig.version}</Text>
    </View>
  )
}

export default VersionStatusLine

const styles = StyleSheet.create({
  container: {width:'100%',height:12,alignItems:'flex-end',backgroundColor:'transparent'},
  text: {color:'#ccc',fontSize:10,}
})