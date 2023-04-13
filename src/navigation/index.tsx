import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn, SignUp} from '../screens';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
