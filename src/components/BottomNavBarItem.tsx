import React from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { ImageStyle, StyleProp } from "react-native";
import AnimatedButtonBase from "./AnimatedButtonBase";

const BottomNavBarItem = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
}: BottomTabBarButtonProps) => {
  return (
    <AnimatedButtonBase
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeScale={0.8}
      buttonStyle={{ flex: 1 }}
      containerStyle={{ flex: 1 }}
    >
      {children}
    </AnimatedButtonBase>
  );
};
export default BottomNavBarItem;
