import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="AuthNavigator" component={AuthNavigator} />
      <Screen name="HomeNavigator" component={HomeNavigator} />
    </Navigator>
  );
};

export default RootNavigator;
