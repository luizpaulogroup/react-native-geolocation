import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Uf from './src/screens/Uf';
import City from './src/screens/City';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Uf" component={Uf} />
        <Stack.Screen name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
