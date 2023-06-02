import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

const ModalTextGroup = ({ memberInfo, accentColor }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View style={{ gap: 16, alignItems:'center' }}>
      
      
      <Text style={{ fontSize: width < 330 ? 18 : 24, color: accentColor, fontWeight: 'bold' }}>
        {memberInfo.mobile ? memberInfo.mobile : '-'}
      </Text>
      {memberInfo.office_phone && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'baseline'}}>
          
          <Text
            style={{ color: accentColor, fontWeight: 'bold', fontSize: width < 330 ? 18 : 24 }}
          >
            {(memberInfo.office_phone && memberInfo.office_phone.includes('02'))
              ? memberInfo.office_phone.substr(
                  memberInfo.office_phone.length - 3
                )
              : memberInfo.office_phone}
          </Text>
          </View>
        </View>
      )}

      <View style={{justifyContent:'center',alignItems:'center',gap: 4}}>
          <Text style={{ fontSize: width < 330 ? 18 : 24, color: accentColor }}>
            {memberInfo.staff_name}
          </Text>
          <Text style={{color:'#a7a7a7', fontSize:12}}>( {memberInfo.org_name} )</Text>
        </View>
    </View>
  );
};

export default React.memo(ModalTextGroup);
