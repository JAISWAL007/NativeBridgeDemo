// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import ButtonScreen from '../screens/ButtonScreen';
import Dashboard from '../screens/Dashboard';

const PreLogin = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

const PostLogin = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const Route = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PreLogin" component={PreLogin} />
        <Stack.Screen name="PostLogin" component={PostLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
