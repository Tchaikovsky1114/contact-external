import AsyncStorage from "@react-native-async-storage/async-storage";


export const getSameField = (field) => (target) => (item) => item.name === target[field]

export const findSameStaffname = getSameField('staff_name');

export const mergeTotalMembers = (organization) => {
  const total = {
    ...organization.adpiamall,
    ...organization.stayrak,
    ...organization.swadpia,
  }
  
  let result = [];
  for(let key in total) {
    result = [...result,...total[key].list]
  }
  return result;
}

export const fetchData = async () => {
  try {
    const data = await fetchGroupData();
    const sortTab = sortingData(data);
    return {
      orgazation: data,
      tab: sortTab
    }
  } catch (error) {
    alert(error,'서버에 오류가 발생했습니다.')
  }    
}


export const fetchGroupData = async () => {
  try {
    
    const response = await fetch('');
    const data = await response.json();

    if(!data){
      alert('데이터 없음. \n서버 관리자에게 문의 부탁드립니다.');
      throw new Error('서버 통신 장애. 아무 값도 존재하지 않음')
    }

    if(data && data.state === "false") {
      alert('데이터 상태 이상. \n서버 관리자에게 문의 부탁드립니다.');
      throw new Error('데이터 스테이트 false')
    }

    if(!data.list){
      alert('데이터 리스트 이상. \n서버 관리자에게 문의 부탁드립니다.');
      throw new Error('데이터 리스트 없음')
    }

    return data.list;
  } catch (error) {
    return error
  }
}

export const sortingData = (data) => {
  
  if(!data) {
    alert('데이터 파싱 불가. \n서버 관리자에게 문의 부탁드립니다.');
    throw new Error('데이터 파싱 불가.')
  }
  const keys = Object.keys(data);
  tb = keys[0]
  tb2 = keys[2]
  keys[0] = keys[1]
  keys[1] = tb2
  keys[2] = tb
  return keys
}

export const getStorageData = async (keyName) => {
  try {
  const jsonValue = await AsyncStorage.getItem(keyName);
  const contacts = jsonValue ? JSON.parse(jsonValue) : [];  
  return contacts
  } catch (error) {
    alert('스토리지에서 데이터를 읽을 수 없습니다.')
    return false;
  }
}

export const setStorageData = async (keyname,value) => {
  try {
    await AsyncStorage.setItem(keyname,JSON.stringify(value));  
  } catch (error) {
    alert('스토리지에 데이터를 저장할 수 없습니다.')
    return false
  }
}

export const deleteStorageData = async(keyName,member,contacts) => {
  try {
    const deletedMemberInContacts = contacts.filter((contact) => contact.name !== member.name);
    await AsyncStorage.setItem(keyName,JSON.stringify(deletedMemberInContacts));
    return deletedMemberInContacts  
  } catch (error) {
    alert('스토리지에서 데이터를 삭제할 수 없습니다.')
    return false
  }
}

export const createMemberInfoObject = (memberInfo) => {
  if(!memberInfo) {
    alert('사원 정보를 찾을 수 없습니다.')
    return
  }
  const storageData = {
    name: memberInfo.staff_name || '',
    mobile: memberInfo.mobile || '',
    office: (memberInfo.office_phone && memberInfo.office_phone.includes('02')) ? memberInfo.office_phone.substr(memberInfo.office_phone.length - 3) : memberInfo.office_phone,
    organization: memberInfo.org_name || '',
    profileImage: memberInfo.photo_file || 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png',
  }
  return storageData
}

export const filteredByOrgName = (item = []) => {
  return item.reduce((acc,cur) => {
    if (!acc[cur.org_name]) {
      acc[cur.org_name] = [];
    }
    acc[cur.org_name] = [...acc[cur.org_name], cur];
    return acc;
  },{})
}

export const validateSwadpiaDepartment = (swadpia) => {
  if(!swadpia) return false;
  let result = true
  for(let key in swadpia) {
    if(typeof swadpia[key] !== 'object' || swadpia[key].length === 0) {
      result = false
    }
  }
  return result
}
