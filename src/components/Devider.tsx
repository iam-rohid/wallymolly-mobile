import { useTheme } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

const Devider = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: theme.colors.border,
      }}
    />
  );
};

export default Devider;
