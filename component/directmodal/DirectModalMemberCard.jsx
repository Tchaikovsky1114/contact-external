import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../colors';
import useContacts from '../../hooks/useContacts';




const DirectModalMemberCard = ({ item,width }) => {
  const { deleteMemberInContacts } = useContacts();
  
  return (
    <View key={item.name} style={{
      flex:1,
      minWidth: '46%',
      maxWidth: '50%',
      flexDirection:'row',
      alignItems:'center',
      elevation:5,
      paddingVertical: 16,
      backgroundColor:'#fff',
      marginBottom: width < 330 ? 12 : 16,
      paddingHorizontal: 12,
      borderRadius: 16,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowRadius: 4,
      shadowOpacity: 0.8,
      shadowColor:'#777'
      }}>
      <TouchableOpacity
        onPress={() => handleShowModal({...item,mobile:item.mobile, org_name:item.organization ,office_phone:item.office, staff_name: item.name,photo_file:item.profileImage,})
          
        }
        style={{
          flex:0.9,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'center',
        }}
      >
        <View style={{flex:0.6,gap:8}}>
          <Text
            style={{
              fontSize: width < 330 ? 14 : width < 500 ? 14 : 16,
              maxWidth:200,
              fontWeight: 'bold',
              color: colors.default,
            }}
            ellipsizeMode='tail'
            numberOfLines={1}
          >
            {item.organization}
            
          </Text>
          <Text
            style={{
              fontSize: width < 330 ? 18 : width < 500 ? 16 : 28,
              fontWeight: 'bold',
              color: colors.default,
            }}
          >
            {item.name}
          </Text>
        </View>
        
        <View style={{flex:0.3}}>
        <Image
          resizeMode="contain"
          borderRadius={width < 330 ? 64 : 80}
          style={{
            width: width < 330 ? 40 : width < 800 ? 56 : 80,
            height: width < 330 ? 40 : width < 800 ? 56 : 80
          }}
          source={{ uri: item.profileImage }}
        />
        </View>

      </TouchableOpacity>
      {width > 500 && (
      <TouchableOpacity style={{
        flex:0.15,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'}} onPress={() => deleteMemberInContacts(item)}>
        <AntDesign name="deleteuser" size={width < 330 ? 18 : 24} color="#f41" />
      </TouchableOpacity>
      )}
    </View>
  )
}

export default React.memo(DirectModalMemberCard);







