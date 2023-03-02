import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import LeftMap from '../components/LeftMap';
import RightMap from '../components/RightMap';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} independent={true}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="MoreChargerInfo" component={MoreChargerInfo} /> */}
      {/* <Stack.Screen name="Zoo" component={Zoomable} /> */}
      <Stack.Screen name="LeftMap" component={LeftMap} />
      <Stack.Screen name="RightMap" component={RightMap} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
