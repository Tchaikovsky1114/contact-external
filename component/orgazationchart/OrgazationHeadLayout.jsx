import { Platform, useWindowDimensions, View } from 'react-native';
import React from 'react';


const OrgazationHeadLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 12,
        width,
        shadowColor:'#fff',
        paddingHorizontal: 16,
        paddingVertical:16,
        position:'absolute',
        top: Platform.OS === 'android' ? 0 : 24,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        zIndex:999
      }}
    >
      
      {children}
    </View>
  );
};

export default React.memo(OrgazationHeadLayout);
