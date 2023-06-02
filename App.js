import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import GroupList from './screens/GroupList';

import OrgazationChart from './screens/OrgazationChart';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar hidden />
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="GroupList" component={GroupList} options={{ headerShown:false }} /> 
      
        <Stack.Screen name="OrgazationChart" component={OrgazationChart} options={{ headerShown:false }} /> 
        
      </Stack.Navigator>
      
    </NavigationContainer>
    </GestureHandlerRootView>
    </>
  );
}


