import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';

export default function Navigator() {
  type TabParamList = {
    Home: undefined;
    Explore: undefined;
    Settings: undefined;
  };
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
