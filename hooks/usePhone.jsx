import { Linking } from 'react-native'
import { useCallback } from 'react'
import { convertCallNumber } from '../actions/userActions';

const usePhone = () => {

  const pressCall = useCallback((number,tabIndex) => {
    const callNumber = convertCallNumber(number,tabIndex);
    Linking.openURL(callNumber);
  }, []);
  
  const pressSMS = useCallback((number) => Linking.openURL(`sms://${number}`),[])
  
  return { pressCall, pressSMS }
}

export default usePhone

