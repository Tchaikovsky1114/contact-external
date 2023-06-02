import { View, Text, Pressable } from 'react-native';
import React from 'react';


const ModalOuter = ({children,handleCloseModal}) => {
  

  
  return (
    <Pressable
      onPress={handleCloseModal}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}
    >
      {children}
    </Pressable>
  );
};

export default React.memo(ModalOuter);
