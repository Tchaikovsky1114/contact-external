import { View, StyleSheet } from 'react-native';
import React from 'react';

const DirectModalMemberCardLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default React.memo(DirectModalMemberCardLayout);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    margin: 4,
  },
});
