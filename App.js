import Home from './src/screens/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Intro from './src/screens/Intro';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
    "colors": {
      "primary": "rgb(248, 189, 42)",
      "onPrimary": "rgb(64, 45, 0)",
      "primaryContainer": "rgb(92, 67, 0)",
      "onPrimaryContainer": "rgb(255, 223, 160)",
      "secondary": "rgb(255, 184, 101)",
      "onSecondary": "rgb(72, 42, 0)",
      "secondaryContainer": "rgb(102, 61, 0)",
      "onSecondaryContainer": "rgb(255, 221, 186)",
      "tertiary": "rgb(255, 183, 134)",
      "onTertiary": "rgb(80, 36, 0)",
      "tertiaryContainer": "rgb(114, 54, 0)",
      "onTertiaryContainer": "rgb(255, 220, 198)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(30, 27, 22)",
      "onBackground": "rgb(233, 225, 216)",
      "surface": "rgb(30, 27, 22)",
      "onSurface": "rgb(233, 225, 216)",
      "surfaceVariant": "rgb(77, 70, 57)",
      "onSurfaceVariant": "rgb(208, 197, 180)",
      "outline": "rgb(153, 143, 128)",
      "outlineVariant": "rgb(77, 70, 57)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(233, 225, 216)",
      "inverseOnSurface": "rgb(52, 48, 42)",
      "inversePrimary": "rgb(121, 89, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(41, 35, 23)",
        "level2": "rgb(47, 40, 24)",
        "level3": "rgb(54, 45, 24)",
        "level4": "rgb(56, 46, 24)",
        "level5": "rgb(61, 50, 25)"
      },
      "surfaceDisabled": "rgba(233, 225, 216, 0.12)",
      "onSurfaceDisabled": "rgba(233, 225, 216, 0.38)",
      "backdrop": "rgba(54, 48, 36, 0.4)"
    }
  
}
export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Intro') {
              iconName = focused
                ? 'camera'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="2" component={Intro} />
        <Tab.Screen name="Poggers2" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
