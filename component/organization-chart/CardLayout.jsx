import { StyleSheet, View } from 'react-native';
import React from 'react';

const OrgazationGroupInnerLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default React.memo(OrgazationGroupInnerLayout);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', flex: 1 },
});
