import Home from './src/screens/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Intro from './src/screens/Intro';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
      "colors": {
        "primary": "rgb(85, 219, 198)",
        "onPrimary": "rgb(0, 55, 48)",
        "primaryContainer": "rgb(0, 80, 71)",
        "onPrimaryContainer": "rgb(118, 248, 226)",
        "secondary": "rgb(177, 204, 197)",
        "onSecondary": "rgb(28, 53, 48)",
        "secondaryContainer": "rgb(51, 75, 70)",
        "onSecondaryContainer": "rgb(205, 232, 225)",
        "tertiary": "rgb(172, 202, 229)",
        "onTertiary": "rgb(19, 51, 72)",
        "tertiaryContainer": "rgb(44, 74, 96)",
        "onTertiaryContainer": "rgb(202, 230, 255)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(25, 28, 27)",
        "onBackground": "rgb(224, 227, 225)",
        "surface": "rgb(25, 28, 27)",
        "onSurface": "rgb(224, 227, 225)",
        "surfaceVariant": "rgb(63, 73, 70)",
        "onSurfaceVariant": "rgb(190, 201, 197)",
        "outline": "rgb(137, 147, 144)",
        "outlineVariant": "rgb(63, 73, 70)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(224, 227, 225)",
        "inverseOnSurface": "rgb(45, 49, 48)",
        "inversePrimary": "rgb(0, 107, 94)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(28, 38, 36)",
          "level2": "rgb(30, 43, 41)",
          "level3": "rgb(32, 49, 46)",
          "level4": "rgb(32, 51, 48)",
          "level5": "rgb(33, 55, 51)"
        },
        "surfaceDisabled": "rgba(224, 227, 225, 0.12)",
        "onSurfaceDisabled": "rgba(224, 227, 225, 0.38)",
        "backdrop": "rgba(41, 50, 48, 0.4)"
      }
    
}
export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Intro" component={Intro}/>
        <Stack.Screen name = "Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}