import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Driver from './app/auth/driver';
import NextPage from './app/auth/NextPage';
import UserProfile from './app/layouts/userperfil';
import PassengerRoutesScreen from './app/layouts/PassengerRoutesScreen';
import MapScreen from './app/layouts/map';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Driver">
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="NextPage" component={NextPage} />
        <Stack.Screen name="User Profile" component={UserProfile} />
        <Stack.Screen name="map" component={ MapScreen} />
        <Stack.Screen name="PassengerRoutesScreen" component={PassengerRoutesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;