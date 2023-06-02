import { useCallback, useState } from 'react';
import { deleteStorageData, getStorageData } from '../actions/dataActions';



const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    
    const callStorageContact = useCallback(async () => {
        const contacts = await getStorageData('directContact');
        setContacts(contacts);
      }, []);
    
    const deleteMemberInContacts = useCallback(
    async (member) => {
        const deletedMemberInContacts = await deleteStorageData(
        'directContact',
        member,
        contacts
        );
        setContacts(deletedMemberInContacts);
    },
    [contacts]
    );
    
  return {
    contacts,
    callStorageContact,
    deleteMemberInContacts
  };
}

export default useContacts

