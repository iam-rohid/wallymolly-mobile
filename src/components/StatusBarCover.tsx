import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StatusBarCover = () => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingTop: safeAreaInsets.top,
        backgroundColor: theme.dark ? "#000" : "#fff",
        opacity: 0.1,
      }}
    ></View>
  );
};

export default StatusBarCover;
