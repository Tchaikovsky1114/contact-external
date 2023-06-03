import { StyleSheet, View } from 'react-native';
import React from 'react';

const GroupLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default React.memo(GroupLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 24,
    position: 'relative',
  }
})