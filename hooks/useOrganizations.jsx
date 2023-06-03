
import { useCallback, useState } from 'react'
import { fetchData, mergeTotalMembers } from '../actions/dataActions';

const useOrganizations = () => {
    const [tab, setTab] = useState();
    const [organization, setOrganization] = useState([]);
    const [error,setError] = useState(null);
    const [group, setGroup] = useState();
    const [totalMembers, setTotalMembers] = useState([]);

    const mergeMember = useCallback((org) => {
      const totalMembers = mergeTotalMembers(org);
      setTotalMembers(totalMembers);
    },[])


    const sortGroup = useCallback((tabIndex) => {
      switch (tabIndex) {
        case 0:
          setGroup(organization.swadpia);
          break;
        case 1:
          setGroup(organization.adpiamall);
          break;
        case 2:
          setGroup(organization.stayrak);
          break;
        default:
          break;
      }
    },[organization])

    const initData = useCallback(async () => {
        try {
          const data = await fetchData();
          setOrganization(data.organization);
          setTab(data.tab);
        } catch (errorMessage) {
          setError(errorMessage);
        }
      },[])

    const replaceBackupDataHandler = useCallback(() => {
      const sortTab = sortingData(backupData);
      setTab(sortTab);
      setOrganization(backupData);
      setError(null);
    },[])

  return { tab, organization, error, initData,replaceBackupDataHandler,sortGroup,mergeMember,group,totalMembers }
}

export default useOrganizations
