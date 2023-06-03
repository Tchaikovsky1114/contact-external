import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

import { colors } from '../../colors';
import useContacts from '../../hooks/useContacts';
import MemberCardDeleteButton from './MemberCardDeleteButton';

const DirectModalMemberCard = ({ item, width, handleShowModalWithClickedMemberInfo }) => {
  const { deleteMemberInContacts } = useContacts();

  return (
    <View
      key={item.name}
      style={[styles.container, { marginBottom: width < 330 ? 12 : 16 }]}
    >
      <TouchableOpacity
        onPress={() =>
          handleShowModalWithClickedMemberInfo({
            ...item,
            mobile: item.mobile,
            org_name: item.organization,
            office_phone: item.office,
            staff_name: item.name,
            photo_file: item.profileImage,
          })
        }
        style={styles.card}
      >
        <View style={{ flex: 0.6, gap: 8 }}>
          <Text
            style={{
              fontSize: 14,
              maxWidth: 200,
              fontWeight: 'bold',
              color: colors.default,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item.organization}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.default,
            }}
          >
            {item.name}
          </Text>
        </View>

        <View style={{ flex: 0.3 }}>
          <Image
            resizeMode="contain"
            borderRadius={width < 330 ? 64 : 80}
            style={{
              width: width < 330 ? 40 : width < 800 ? 56 : 80,
              height: width < 330 ? 40 : width < 800 ? 56 : 80,
            }}
            source={{ uri: item.profileImage }}
          />
        </View>
      </TouchableOpacity>
      {width > 500 && <MemberCardDeleteButton deleteMemberInContacts={deleteMemberInContacts} item={item} />}
    </View>
  );
};

export default React.memo(DirectModalMemberCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '46%',
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 16,
    backgroundColor: '#fff',

    paddingHorizontal: 12,
    borderRadius: 16,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    shadowColor: '#777',
  },
  card: {
    flex: 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
