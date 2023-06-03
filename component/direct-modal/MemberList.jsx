import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import DirectModalMemberCardLayout from './MemberCardLayout';
import DirectModalMemberCard from './MemberCard';

const MemberList = ({ handleShowModal, width, contacts }) => {
  return (
    <ScrollView
      style={[styles.container, { marginTop: width < 330 ? 16 : 32 }]}
    >
      <DirectModalMemberCardLayout>
        {contacts.map((item) => (
          <DirectModalMemberCard
            handleShowModal={handleShowModal}
            key={item.name}
            item={item}
            width={width}
          />
        ))}
      </DirectModalMemberCardLayout>
    </ScrollView>
  );
};

export default React.memo(MemberList);

const styles = StyleSheet.create({
  container: {
    minHeight: '80%',
    width: '100%',
    borderRadius: 32,
  },
});
