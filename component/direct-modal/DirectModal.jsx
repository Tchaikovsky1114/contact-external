import { Modal } from 'react-native';
import React, { useEffect } from 'react';
import DirectModalLayout from './ModalLayout';
import DirectModalCloseButton from './CloseButton';
import DirectModalHeader from './Header';
import DirectModalOuter from './ModalOuter';
import useContacts from '../../hooks/useContacts';
import MemberList from './MemberList';

const DirectModal = ({handleCloseDirectModal,directModalVisible,width,handleShowModalWithClickedMemberInfo}) => {
  const { callStorageContact, contacts } = useContacts();

  useEffect(() => {
    callStorageContact();
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
        <DirectModalLayout width={width}>
          <DirectModalCloseButton
            handleCloseDirectModal={handleCloseDirectModal}
          />
          <DirectModalHeader />
          <MemberList
            handleShowModalWithClickedMemberInfo={handleShowModalWithClickedMemberInfo}
            width={width}
            contacts={contacts}
          />
        </DirectModalLayout>
      </DirectModalOuter>
    </Modal>
  );
};

export default React.memo(DirectModal);
