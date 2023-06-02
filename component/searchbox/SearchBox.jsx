import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../colors';

const SearchBox = ({foundMembers,handleShowModal,width}) => {
  return (
    <>
      <View
        style={[
          { marginTop: width < 330 ? 60 : width < 500 ? 80 : 120 },
          styles.container,
        ]}
      >
        <Text style={{ fontSize: 16 }}>
          총{' '}
          <Text style={{ fontSize: 20, color: colors.emphasis }}>
            {foundMembers.length}
          </Text>
          명이 검색되었습니다.
        </Text>
      </View>
      <View>
        <FlatList
          horizontal
          style={styles.searchBox}
          contentContainerStyle={styles.searchBoxContent}
          data={foundMembers.sort((a, b) =>
            a.staff_name < b.staff_name ? -1 : 1
          )}
          keyExtractor={(item) => item.staff_name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.memberCard}
              onPress={() => handleShowModal(item)}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: width < 500 ? 48 : 60,
                  height: width < 500 ? 48 : 60,
                }}
                borderRadius={width < 500 ? 48 : 60}
                source={{
                  uri:
                    item.photo_file ||
                    'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png',
                }}
              />
              <Text style={{ fontWeight: 'bold' }}>
                {item.staff_name.substr(0, 3)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4,
    elevation: 2,
  },
  searchBoxContent: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  memberCard: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    elevation: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginRight: 16,
    paddingVertical: 8,
  },
});
