import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParamList } from "../types";

type Props = NativeStackScreenProps<HomeStackParamList, "EditUser">;

const EditUserScreen = ({ navigation, route }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Edit User",
    });
  }, []);
  return (
    <View>
      <Text>Edit user info</Text>
    </View>
  );
};

export default EditUserScreen;

const styles = StyleSheet.create({});
