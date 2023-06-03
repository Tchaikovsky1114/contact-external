import {useCallback, useState} from 'react'

const useModal = (isOpen,setIsOpen) => {
  const [memberInfo,setMemberInfo] = useState({});
  
  const handleOpenModal = useCallback(() => {
    setIsOpen(true)
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, []);
  
  const handleSetMemberInfo = useCallback((member) => {
    setMemberInfo(member);
  }, []);

  const handleShowModalWithClickedMemberInfo = useCallback((member) => {
    setIsOpen(prev => !prev);
    handleSetMemberInfo(member);
  }, [memberInfo]);
  
  return {
    isOpen,
    memberInfo,
    handleCloseModal,
    handleShowModalWithClickedMemberInfo,
    handleOpenModal
  }
}

export default useModal

