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
        <Stack.Screen
          options={{
            headerTitle: "Estados"
          }}
          name="Uf"
          component={Uf} />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.uf.nome
          })}
          name="City"
          component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
