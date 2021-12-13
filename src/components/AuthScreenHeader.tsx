import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, useWindowDimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedButtonBase from "./AnimatedButtonBase";

const AuthScreenHeader = ({
  navigation,
  options: { title },
}: NativeStackHeaderProps) => {
  const theme = useTheme();
  const dimantions = useWindowDimensions();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        width: dimantions.width,
        backgroundColor: theme.colors.background,
      }}
    >
      <View
        style={{
          height: 56,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <AnimatedButtonBase
            buttonStyle={{
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
            onPress={() => {
              navigation.pop();
            }}
          >
            <Image
              source={require("../../assets/icons/Arrow_left.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                tintColor: theme.colors.text,
              }}
            />
          </AnimatedButtonBase>
        </View>

        <Text
          style={{ color: theme.colors.text, fontSize: 24, fontWeight: "700" }}
        >
          {title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end",
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreenHeader;
