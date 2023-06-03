import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import OrgazationHeaderTabButton from './HeaderTabButton';
import starImage from '../../assets/star.png';
import OrgazationHeadLayout from './HeaderLayout';
import FindMemberForm from '../searchform/SearchInput';

const OrgazationHeader = ({ width, handleOpenDirectModal, tab, tabIndex, setTabIndex,setFoundMembers,totalMembers }) => {
  return (
    <OrgazationHeadLayout>
    <View style={{flex:0.9,flexDirection:'row',gap:4}}>
    {tab &&
      tab.map((item, index) => {
        if(typeof item === 'undefined') return;
        return (
        <OrgazationHeaderTabButton
          index={index}
          item={item}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          key={item}
        />
        )}
      )}
      </View>
      <FindMemberForm setFoundMembers={setFoundMembers} totalMembers={totalMembers} />
    <TouchableOpacity
    style={styles.starButton}
    onPress={handleOpenDirectModal}>
      <Image source={starImage} style={{width: width < 330 ? 24 : width < 440 ? 32 : 40, height: width < 330 ? 19.6 : width < 440 ? 28 : 32}} />
    </TouchableOpacity>
  </OrgazationHeadLayout>
  );
};

export default React.memo(OrgazationHeader);

const styles = StyleSheet.create({
  starButton: {paddingVertical:8, paddingHorizontal:8,flex:0.1,flexDirection:'column',alignItems:'center'}
});
