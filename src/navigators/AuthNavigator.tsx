import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthLogInScreen,
  AuthRegisterScreen,
  AuthHomeScreen,
} from "../screens";
import { AuthStackParamList } from "../types";
import AuthScreenHeader from "../components/AuthScreenHeader";

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={AuthHomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="LogIn"
        component={AuthLogInScreen}
        options={{ header: AuthScreenHeader, title: "Log In" }}
      />
      <Screen
        name="Register"
        component={AuthRegisterScreen}
        options={{ header: AuthScreenHeader, title: "Create an account" }}
      />
    </Navigator>
  );
};

export default AuthNavigator;
