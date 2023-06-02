import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../colors'

const BackupButton = ({replaceBackupDataHandler}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity
    onPress={replaceBackupDataHandler}
    style={[styles.button,{borderColor:colors.default,}]}>
      <Text style={styles.buttonText}>백업데이터 불러오기</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BackupButton

const styles = StyleSheet.create({
  container: {flex:1,justifyContent:'center',alignItems:'center'},
  button: {justifyContent:'center',alignItems:'center', width:200,height:56,borderWidth:1,borderRadius:12},
  buttonText: {fontSize: 16}
})