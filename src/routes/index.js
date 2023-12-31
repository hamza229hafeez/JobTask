import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { LoginScreen } from '~screens/auth';
import { Loader } from '~components';
import ScreenNames from './routes';
import { AddImage, CropImage, HomeScreen, ViewImage } from '~screens/app';
import { selectIsLoggedIn } from '~redux/slices/user';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn)
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.LOGIN} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={ScreenNames.HOME} >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          <Stack.Screen name={ScreenNames.ADDIMAGE} component={AddImage} />
          <Stack.Screen name={ScreenNames.VIEWIMAGE} component={ViewImage} />
          <Stack.Screen name={ScreenNames.CROPIMAGE} component={CropImage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}