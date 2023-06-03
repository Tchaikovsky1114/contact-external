import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../colors';

const GroupTitle = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={[styles.container,{
        minWidth: width < 330 ? 125 : 174,
        backgroundColor: colors.default,
        height: width < 330 ? 32 : width < 500 ? 40 : 48,
      }]}
    >
      <Text
        style={{
          fontSize: width < 330 ? 16 : width < 500 ? 20 : 24,
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {item}
      </Text>
    </View>
  );
};

export default React.memo(GroupTitle);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginVertical: 8,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
