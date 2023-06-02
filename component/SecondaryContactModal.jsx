import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Modal, useWindowDimensions } from 'react-native'
import ModalInner from './secondary-contactmodal/ModalInner';
import ModalOuter from './secondary-contactmodal/ModalOuter';
import { createMemberInfoObject, findSameStaffname, getStorageData, setStorageData } from '../actions/dataActions';
import usePhone from '../hooks/usePhone';


const SecondaryContactModal = ({pressCall, pressSMS ,handleCloseModal,isOpen,logoImage,accentColor,tabIndex,memberInfo}) => {
  
  const [isMyNameInContact,setIsMyNameInContact] = useState(false);
  const { width } = useWindowDimensions();
  

  const pressBookmark = useCallback(async(memberInfo) => {
    const contacts = await getStorageData('directContact');
    const getSameName = findSameStaffname(memberInfo);
    const filterDuplicatedName = contacts.find(getSameName)
    
    
    if(filterDuplicatedName) {
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

      } else {
        const clickedMemberInfo = createMemberInfoObject(memberInfo);
        // console.log('=== clickedMemberInfo===',clickedMemberInfo);
        const willStoredContact = [...contacts,clickedMemberInfo];
        await setStorageData('directContact',willStoredContact);
        setIsMyNameInContact(true);
      }
  },[])

  const checkMyContact = async() => {
    const contacts = await getStorageData('directContact');
    const findMyName = contacts.find((item) => item.name === memberInfo.staff_name);
    setIsMyNameInContact(findMyName);
  }
  
  useEffect(() => {
    checkMyContact()
  },[isOpen])
  
  
  return (
    <Modal
    animationType="fade"
    transparent
    visible={isOpen}
    onRequestClose={handleCloseModal}
    statusBarTranslucent
  >
    <ModalOuter handleCloseModal={handleCloseModal}>
      <ModalInner
        handleCloseModal={handleCloseModal}
        key={memberInfo.name}
        accentColor={accentColor}
        pressBookmark={pressBookmark}
        logoImage={logoImage}
        memberInfo={memberInfo}
        pressCall={pressCall}
        pressSMS={pressSMS}
        width={width}
        isMyNameInContact={isMyNameInContact}
        tabIndex={tabIndex}
        />
    </ModalOuter>
  </Modal>
  )
}

export default React.memo(SecondaryContactModal)

