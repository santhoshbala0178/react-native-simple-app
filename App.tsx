
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/Home';
import ColorPalette from './screens/ColorPalette/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal/ColorPaletteModal';
 
 const RootStack = createStackNavigator();
 const MainStack = createStackNavigator();

 const MainScreen = () => {
   
  return (
      <MainStack.Navigator>
         <MainStack.Screen name="Home" component={Home} />
         <MainStack.Screen name="ColorPalette" component={ColorPalette} />
      </MainStack.Navigator>
  );
};


 const App = () => {
   
   return (
     <NavigationContainer>
       <RootStack.Navigator screenOptions={{presentation:"modal"}}>
          <RootStack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
          <RootStack.Screen name="ColorPaletteModal" component={ColorPaletteModal} />
       </RootStack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 export default App;
 


 