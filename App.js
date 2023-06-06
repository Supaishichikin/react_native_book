import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/screens/HomeScreen";
import BookScreen from "./components/screens/BookScreen";
import CategoriesScreen from "./components/screens/CategoriesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
