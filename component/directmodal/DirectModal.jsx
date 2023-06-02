import { Modal, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import DirectModalLayout from './DirectModalLayout'
import DirectModalCloseButton from './DirectModalCloseButton'
import DirectModalHeader from './DirectModalHeader'
import DirectModalMemberLayout from './DirectModalMemberLayout'
import DirectModalMemberCard from './DirectModalMemberCard'
import DirectModalOuter from './DirectModalOuter'
import useContacts from '../../hooks/useContacts'


const DirectModal = ({handleCloseDirectModal,directModalVisible,width,pressCall}) => {
  
  const { callStorageContact,contacts } = useContacts();
  

  useEffect(() => {
    callStorageContact()
  }, [directModalVisible]);
  return (
    <Modal
    visible={directModalVisible}
    transparent
    animationType="fade"
    onRequestClose={handleCloseDirectModal}
    statusBarTranslucent
  >
    <DirectModalOuter>
      <DirectModalLayout width={width} >
        <DirectModalCloseButton handleCloseDirectModal={handleCloseDirectModal} />
          <DirectModalHeader />
          <ScrollView style={{minHeight:'80%',width:'100%',borderRadius:32,marginTop:width < 330 ? 16 : 32}}>
            <DirectModalMemberLayout>
              {contacts.map((item) => <DirectModalMemberCard key={item.name} item={item} pressCall={pressCall} width={width} />)}
            </DirectModalMemberLayout>
          </ScrollView>
      </DirectModalLayout>
    </DirectModalOuter>
  </Modal>
  )
}

export default React.memo(DirectModal);

