import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { View, Text } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (_user) => {
        setUser(_user);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  if (loading) return null; // TODO: Loading screen

  return (
    <Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{ headerShown: false }}
    >
      {user ? (
        <Screen name="HomeNavigator" component={HomeNavigator} />
      ) : (
        <Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Navigator>
  );
};

export default RootNavigator;
