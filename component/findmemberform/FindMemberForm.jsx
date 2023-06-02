import {
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../colors';


const FindMemberForm = ({ totalMembers,setFoundMembers }) => {
  const [inputValue, setInputValue] = useState('');
  
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    if (!inputValue) {
      setFoundMembers([]);
      return;
    }
    let timer = setTimeout(() => {
      const filterTarget = totalMembers.filter((item) =>
        item?.staff_name?.includes(inputValue)
      );
      const removeDuplicateStaffName = filterTarget.reduce((acc, cur) => {
        return acc.find((x) => x.staff_name === cur.staff_name)
          ? acc
          : [...acc, cur];
      }, []);

      setFoundMembers(removeDuplicateStaffName);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue]);
  
  return (
    <>
      <View
        style={{
          
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderRadius: 8,
        }}
      >
        <TextInput
          onFocus={() => setInputValue('')}
          placeholder="검색"
          value={inputValue}
          clearTextOnFocus
          onChangeText={(text) => setInputValue(text)}
          style={{
            width: width < 330 ? 80 : width < 500 ? 120 : 180,
            padding: width < 330 ? 0 : 8,
            borderColor: colors.default,
            fontSize: width < 330 ? 14 : 18,
            textAlign: 'center',
          }}
          cursorColor={colors.default}
        />
      </View>
    </>
  );
};

export default FindMemberForm;
