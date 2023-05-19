import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/screens/posts';
import Screen2 from './src/screens/detail';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'transparentModal',
          }}>
          <Stack.Screen
            name="Posts"
            component={Screen1}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Detail" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
