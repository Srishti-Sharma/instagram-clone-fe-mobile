import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export default function Navigator() {
  type TabParamList = {
    Home: undefined;
    Explore: undefined;
    Settings: undefined;
  };

  type AuthStackList = {
    Login: undefined;
    SignUp: undefined;
  };
  const Tab = createBottomTabNavigator<TabParamList>();

  const AuthStack = createNativeStackNavigator<AuthStackList>();

  const isSignedIn: boolean = false;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
