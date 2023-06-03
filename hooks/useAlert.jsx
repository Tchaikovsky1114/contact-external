import { Alert } from 'react-native'


const useAlert = ({title,content,onPress1,calcelText,cancelable}) => {
  return (
    Alert.alert(
      'DirectContact에 등록된 사원입니다.',
      '삭제하시겠습니까?',
      [
        {
          text: '삭제',
          onPress: async () => {
              const storeContact = [...contacts.filter((item) => item.name !== memberInfo.staff_name)];
              await setStorageData('directContact',storeContact);
              setIsMyNameInContact(false);
          }
        },
        { text: '취소' }
      ],
      { cancelable:true })
  )
}

export default useAlert

