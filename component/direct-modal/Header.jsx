import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { colors } from '../../colors';

const DirectModalHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: width < 330 ? 4 : 16,
          borderBottomColor: colors.default,
        },
      ]}
    >
      <Text
        style={{
          fontSize: width < 330 ? 24 : 32,
          fontWeight: 'bold',
          color: colors.default,
        }}
      >
        다이랙트 콜
      </Text>
    </View>
  );
};

export default React.memo(DirectModalHeader);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '96%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});
