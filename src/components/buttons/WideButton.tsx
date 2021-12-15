import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import AnimatedButtonBase from "../AnimatedButtonBase";

const WideButton = ({
  onPress,
  text,
  disabled,
  activeScale,
  style,
  textStyle,
  icon,
}: {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  activeScale?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <AnimatedButtonBase
      disabled={disabled}
      activeScale={activeScale}
      onPress={onPress}
      containerStyle={{
        flex: 1,
      }}
      buttonStyle={[
        {
          flex: 1,
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 16,
          height: 48,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "relative",
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <View style={{ position: "absolute", left: 20, width: 32, height: 32 }}>
        {icon}
      </View>
      <Text
        numberOfLines={1}
        style={[
          {
            color: "#fff",
            fontWeight: "600",
            fontSize: 16,
            paddingHorizontal: icon !== undefined ? 42 : 0,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </AnimatedButtonBase>
  );
};

export default WideButton;
