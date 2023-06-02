import { View } from 'react-native';
import React from 'react';

const OrgazationGroupLayout = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 24,
        position: 'relative',
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(OrgazationGroupLayout);
