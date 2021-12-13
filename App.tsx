import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  const scheme = useColorScheme();
  const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: "#fff",
      text: "#000",
      primary: "#0066FF",
    },
  };
  const darkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      card: "#151515",
      text: "#fff",
      primary: "#0066FF",
    },
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? darkTheme : lightTheme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
