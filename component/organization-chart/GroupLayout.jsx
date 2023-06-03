import { StyleSheet, View } from 'react-native';
import React from 'react';

const OrgazationGroupLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default React.memo(OrgazationGroupLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 24,
    position: 'relative',
  }
})