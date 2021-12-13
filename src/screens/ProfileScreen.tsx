import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types";
const ProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "HomeNavigator">
    >();
  useEffect(() => {
    navigation.push("AuthNavigator");
  }, []);
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
