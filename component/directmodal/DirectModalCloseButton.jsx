import {  TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../colors';
const DirectModalCloseButton = ({handleCloseDirectModal,width}) => {
  return (
    <TouchableOpacity style={{position:'absolute', top:'1.5%', right: '3%'}} onPress={handleCloseDirectModal}>
      <Entypo name="cross" size={ width < 330 ? 32 : 48 } color={colors.default} />
    </TouchableOpacity>
  )
}

export default React.memo(DirectModalCloseButton);