import { FlatList, View, useWindowDimensions } from 'react-native';
import React, { memo, useCallback, useRef, useState } from 'react';
import GroupCard from './GroupCard';
import { State, TapGestureHandler } from 'react-native-gesture-handler';

const GroupList = ({
  group,
  setTabIndex,
  setFoundMembers,
  tabIndex,
  handleShowModal,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const [firstTouchOffSet, setFirstTouchOffSet] = useState(0);

  const onDoubleTapEvent = useCallback(
    (e) => {
      if (e.nativeEvent.state === State.ACTIVE) {
        tabIndex === 2 ? setTabIndex(0) : setTabIndex((prev) => prev + 1);
      }
    },
    [State.ACTIVE, tabIndex]
  );

  return (
    <TapGestureHandler onHandlerStateChange={onDoubleTapEvent} numberOfTaps={2}>
      <View
        onTouchStart={(e) => {
          setFirstTouchOffSet(e.nativeEvent.pageX);
        }}
        onTouchEnd={(e) => {
          const positionX = e.nativeEvent.pageX;
          const range = windowWidth / 20;
          if (positionX - firstTouchOffSet > range) {
            tabIndex === 0 ? setTabIndex(2) : setTabIndex((prev) => prev - 1);
          } else if (firstTouchOffSet - positionX > range) {
            tabIndex === 2 ? setTabIndex(0) : setTabIndex((prev) => prev + 1);
          }
        }}
      >
        <FlatList
          style={[{ marginTop: windowWidth < 330 ? 64 : 80 }]}
          scrollEventThrottle={16}
          onScrollEndDrag={(event) => {
            if (event.nativeEvent.contentOffset.y > 100) {
              setFoundMembers([]);
            }
          }}
          data={Object.keys(group)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard
              item={item}
              handleShowModal={handleShowModal}
              key={item.staff_name}
              group={group}
            />
          )}
        />
      </View>
    </TapGestureHandler>
  );
};

export default memo(GroupList);
