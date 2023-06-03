import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { colors } from '../../colors';

const GroupTitle = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        alignSelf:'flex-start',
        minWidth: width < 330 ? 125 : 174,
        paddingHorizontal:16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
        
        backgroundColor: colors.default,
        marginVertical: 8,
        height: width < 330 ? 32 : width < 500 ? 40 : 48,
        borderTopRightRadius:12,
        borderBottomLeftRadius:12,
      }}
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
