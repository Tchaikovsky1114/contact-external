import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import HeaderTabButton from './HeaderTabButton';
import starImage from '../../assets/star.png';
import HeaderLayout from './HeaderLayout';
import SearchInput from '../searchform/SearchInput';

const Header = ({
  width,
  handleOpenDirectModal,
  tab,
  tabIndex,
  setTabIndex,
  setFoundMembers,
  totalMembers,
}) => {
  return (
    <HeaderLayout>
      <View style={styles.buttonGroup}>
        {tab &&
          tab.map((item, index) => {
            if (typeof item === 'undefined') return;
            return (
              <HeaderTabButton
                index={index}
                item={item}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                key={item}
              />
            );
          })}
      </View>
      <SearchInput
        setFoundMembers={setFoundMembers}
        totalMembers={totalMembers}
      />
      <TouchableOpacity
        style={styles.starButton}
        onPress={handleOpenDirectModal}
      >
        <Image
          source={starImage}
          style={{
            width: width < 330 ? 24 : width < 440 ? 32 : 40,
            height: width < 330 ? 19.6 : width < 440 ? 28 : 32,
          }}
        />
      </TouchableOpacity>
    </HeaderLayout>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 0.9,
    flexDirection: 'row',
    gap: 4
  },
  starButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
