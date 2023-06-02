import { View } from 'react-native';
import React from 'react';

const OrgazationGroupInnerLayout = ({ children }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
      {children}
    </View>
  );
};

export default React.memo(OrgazationGroupInnerLayout);
