import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Image, Text } from "react-native";
import { RootStackParamList } from "../types";
import AnimatedButtonBase from "./AnimatedButtonBase";

const UserInfoBar = () => {
  const theme = useTheme();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "HomeNavigator">
    >();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        }}
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          resizeMode: "cover",
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: theme.colors.text,
          }}
        >
          Jhon Doe
        </Text>
        <Text style={{ fontSize: 14, color: theme.colors.text }}>@jhondoe</Text>
      </View>
      <AnimatedButtonBase
        containerStyle={{
          marginLeft: "auto",
          height: 32,
        }}
        buttonStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
          borderRadius: 8,
          borderColor: theme.colors.text,
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.push("AuthNavigator");
        }}
      >
        <Text style={{ color: theme.colors.text }}>Follow</Text>
      </AnimatedButtonBase>
    </View>
  );
};

export default UserInfoBar;
