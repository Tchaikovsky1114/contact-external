import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const MemberCardDeleteButton = ({deleteMemberInContacts,item,}) => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => deleteMemberInContacts(item)}
  >
    <AntDesign
      name="deleteuser"
      size={width < 330 ? 18 : 24}
      color="#f41"
    />
  </TouchableOpacity>
  )
}

export default MemberCardDeleteButton

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  }
})