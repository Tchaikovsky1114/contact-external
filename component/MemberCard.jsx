import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const MemberCard = ({member,sortedPart,width,accentColor}) => {
  // sortedCard === member[item] ;
  
  
  return (
   
    <TouchableOpacity
    onPress={() => handleShowModal(member)}
    key={member.staff_name}
    style={[styles.button,{
      minWidth: (sortedPart.length < 20 && width > 430) ? '40%' : (sortedPart.length > 20 && sortedPart.length < 40) ? '30%' : width < 430 ? '32%' : '24%',
      gap: width < 430 ? 8 : 12,
      minHeight: (sortedPart.length < 20 && width > 430) ? 130 : 80,
      backgroundColor: (member.duty_position !== '파트원' && member.duty_position !== '책임' && member.duty_position !== '사원' && member.duty_position !== '팀원') ? '#fff' : '#f1f1f1' ,
      paddingHorizontal:8,
      borderRadius:8,
      maxWidth:'48%',
      elevation:5,
      paddingVertical:4,
    }]}
    >
      <Image
        borderRadius={(sortedPart.length < 20 && width > 430) ? 104 : 72}
        style={{
          width: (sortedPart.length < 20 && width > 430) ? 80 : width < 430 ? 36 : 72 ,
          height: (sortedPart.length < 20 && width > 430) ? 80 : width < 430 ? 36 : 72 }}
          resizeMode='contain'
          source={{uri: member.photo_file ? member.photo_file : 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'}}
      />
      <View>
        <Text style={{color:'#ccc',fontSize:12}}><Text style={{fontSize:(sortedPart.length < 20 && width > 430) ? 28 : width < 430 ? 18 : 24,fontWeight:'bold',color:accentColor}}>{member.staff_name}</Text> { width > 430 &&  member.duty_position}</Text>
        {member.office_phone && <Text style={{fontSize:(sortedPart.length < 20 && width > 430) ?  18 : width < 430 ? 12 : 14,color:'#aaa'}}>내선번호: <Text style={{color:accentColor,fontSize:20,fontWeight:'bold'}}>{(member.office_phone && member.office_phone.includes('02')) ? member.office_phone.substr(member.office_phone.length - 3) : member.office_phone}</Text></Text>}
        <Text style={{fontSize:(sortedPart.length < 20 && width > 430) ?  16 : width < 430 ? 12 : 14,color:accentColor,fontWeight:'bold'}}>{member.mobile ? member.mobile : '-'}</Text>
      </View>
    </TouchableOpacity>
  )
}


export default React.memo(MemberCard);

const styles = StyleSheet.create({
  button : {
    flex:1,
    flexDirection:'row',
    minHeight: 64,
    justifyContent:'flex-start',
    alignItems:'center',
    borderColor:'#ccc'
  }
})