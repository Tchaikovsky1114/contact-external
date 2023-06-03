import { StyleSheet, View } from 'react-native';
import React from 'react';

const ButtonGroupLayout = ({ children, accentColor }) => {
  return (
    <View style={[styles.container, { borderColor: accentColor }]}>
      {children}
    </View>
  );
};

export default React.memo(ButtonGroupLayout);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    height: 56,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
    borderTopWidth: 1,
  },
});
