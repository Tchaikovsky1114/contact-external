import { Pressable, StyleSheet } from 'react-native';
import React from 'react';


const ModalOuter = ({children,handleCloseModal}) => {
  
  return (
    <Pressable
      onPress={handleCloseModal}
      style={styles.container}
    >
      {children}
    </Pressable>
  );
};

export default React.memo(ModalOuter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
})
