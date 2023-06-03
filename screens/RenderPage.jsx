import {StyleSheet,View,Image,Pressable,useWindowDimensions, Platform} from 'react-native';
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import swadpia from '../assets/swadpia.png';
import foodmall from '../assets/swfoodmall.png';
import adpiamall from '../assets/adpiamall.png';
import swlogo from '../assets/mainlogo.png';
import { useNavigation } from '@react-navigation/native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import RenderButton from '../component/render-page/RenderButton';

const RenderPage = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  useEffect(() => {
    Platform.OS === 'android' && ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  return (
      <FlingGestureHandler
      direction={ Directions.RIGHT | Directions.LEFT}
      onHandlerStateChange={(e) => {
        if(e.nativeEvent.state === State.ACTIVE){
          navigation.navigate('Organization',{showChart:0})
        }
      }}
      >
      <View style={[styles.container, { paddingHorizontal: width < 330 ? 16 : 32 }]}>
        <View style={{ flex: width < 330 ? 0.92 : 0.85, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: width < 430 ? 150 : 200, height: width < 430 ? 150 : 200 }}
            resizeMode="contain"
            source={swlogo}
          />
        </View>

        <View style={[styles.buttonGroup,{ flex: width < 330 ? 0.08 : 0.1 } ]}>
          <RenderButton imageUrl={swadpia} showChart={0} width={width} />
          <RenderButton imageUrl={adpiamall} showChart={1} width={width} />
          <RenderButton imageUrl={foodmall} showChart={2} width={width} />
        </View>
      </View>
      </FlingGestureHandler>
  );
};

export default RenderPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f7fb',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 36,
    gap:8
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 6,
    elevation: 3,
    paddingHorizontal:4,
  },
  button_ios : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    flexDirection: 'row',
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 6,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    backgroundColor:'#fff',
    shadowColor: '#ccc',
    paddingHorizontal:4,
  }
});
