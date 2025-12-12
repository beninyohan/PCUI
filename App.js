import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Trust from './screens/Trust';
import { initI18n } from './i18n';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => { initI18n(); }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Trust" component={Trust} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
