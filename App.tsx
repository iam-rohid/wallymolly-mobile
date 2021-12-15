import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import RootNavigator from "./src/navigators";

export default function App() {
  const scheme = useColorScheme();
  const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
      card: "#fff",
      text: "#000",
      primary: "#0066FF",
      border: "#F2F2F2",
    },
  };
  const darkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      background: "#000",
      card: "#000",
      text: "#fff",
      primary: "#0066FF",
      border: "#000",
    },
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? darkTheme : lightTheme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
