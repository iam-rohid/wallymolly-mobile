import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import AnimatedButtonBase from "./AnimatedButtonBase";
import { Image, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

const CloseButton = ({
  style,
  onPress,
  source,
}: {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  source?: ImageSourcePropType;
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <AnimatedButtonBase
      buttonStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.card,
        borderRadius: 100,
        width: 38,
        height: 38,
      }}
      containerStyle={style}
      onPress={() => {
        if (onPress) {
          onPress();
          return;
        }
        navigation.goBack();
      }}
    >
      <Image
        source={source || require("../../assets/icons/Close.png")}
        style={{
          width: 24,
          height: 24,
          resizeMode: "contain",
          tintColor: theme.colors.text,
        }}
      />
    </AnimatedButtonBase>
  );
};

export default CloseButton;
