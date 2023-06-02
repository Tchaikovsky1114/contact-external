import { View } from 'react-native';
import React from 'react';

const ButtonGroupLayout = ({ width, children, accentColor }) => {
  return (
    <View
      style={{
        
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        width: '90%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: accentColor,
        paddingLeft: 8,
        height: 56,
        
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(ButtonGroupLayout);
