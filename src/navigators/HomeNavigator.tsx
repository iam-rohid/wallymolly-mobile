import React from "react";
import { HomeStackParamList } from "../types";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostDetailsScreen, WallpaperDownloadScreen } from "../screens";

const { Screen, Navigator } = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="PostDetails" component={PostDetailsScreen} />
      <Screen name="WallpaperDownlaod" component={WallpaperDownloadScreen} />
    </Navigator>
  );
};

export default HomeNavigator;
