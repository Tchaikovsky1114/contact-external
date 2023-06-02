import { View, VirtualizedList } from 'react-native';
import React from 'react';
import OrgazationGroupTitle from './OrgazationGroupTitle';
import OrgazationGroupInnerLayout from '../orgazationchart/OrgazationGroupInnerLayout';
import OrgazationGroupMembercard from '../orgazationchart/OrgazationGroupMembercard';

const OrgazationGroupItem = ({ group, item,handleShowModal }) => {
  return (
    <View>
      <OrgazationGroupTitle item={item} />
      <OrgazationGroupInnerLayout>
        <VirtualizedList
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 4,
          }}
          data={group[item].list}
          getItem={(data, index) => {
            if (index in data) {
              return {
                key: data[index].staff_name,
                photo_file: data[index].photo_file,
                staff_name: data[index].staff_name,
                item: data[index],
              };
            }
          }}
          getItemCount={(data) => data.length}
          keyExtractor={(item) => item.staff_name}
          renderItem={({ item }) =>
            item ? (
              <OrgazationGroupMembercard
                key={item.staff_name}
                staffName={item.staff_name}
                photoFile={item.photo_file}
                item={item.item}
                handleShowModal={handleShowModal}
              />
            ) : null
          }
          initialNumToRender={20}
          maxToRenderPerBatch={50}
          windowSize={150}
          updateCellsBatchingPeriod={50}
          removeClippedSubviews={false}
          onEndReachedThreshold={0}
        />
      </OrgazationGroupInnerLayout>
    </View>
  );
};

export default React.memo(OrgazationGroupItem);
