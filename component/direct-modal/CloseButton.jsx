import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../colors';
const DirectModalCloseButton = ({ handleCloseDirectModal, width }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleCloseDirectModal}>
      <Entypo
        name="cross"
        size={width < 330 ? 32 : 40}
        color={colors.default}
      />
    </TouchableOpacity>
  );
};

export default React.memo(DirectModalCloseButton);

const styles = StyleSheet.create({
  button: { position: 'absolute', top: '1.5%', right: '3%' },
});
