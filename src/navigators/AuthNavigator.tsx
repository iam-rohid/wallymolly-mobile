import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../screens";
import { AuthStackParamList } from "../types";

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthNavigator;
