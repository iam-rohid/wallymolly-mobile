import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";
import {
  PostDetailsScreen,
  WallpaperDownloadScreen,
  EditUserScreen,
  UserDetailsScreen,
} from "../screens";
import TabNavigator from "./TabNavigator";
import { Header } from "../components";

const { Screen, Navigator } = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Screen name="PostDetails" component={PostDetailsScreen} />
      <Screen
        name="WallpaperDownlaod"
        component={WallpaperDownloadScreen}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
        }}
      />
      <Screen
        name="EditUser"
        component={EditUserScreen}
        options={{
          presentation: "modal",
          title: "Edit User",
        }}
      />
      <Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default HomeNavigator;
