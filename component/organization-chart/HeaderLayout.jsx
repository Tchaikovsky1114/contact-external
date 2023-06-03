import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';


const HeaderLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View
      style={[styles.container,{width}]}
    >
      {children}
    </View>
  );
};

export default React.memo(HeaderLayout);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 12,
    
    shadowColor:'#fff',
    paddingHorizontal: 16,
    paddingVertical:16,
    position:'absolute',
    top: Platform.OS === 'android' ? 0 : 24,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    zIndex:999
  }
})
