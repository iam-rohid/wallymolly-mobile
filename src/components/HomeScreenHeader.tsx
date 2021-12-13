import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, useWindowDimensions, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedButtonBase from "./AnimatedButtonBase";

const HomeScreenHeader = () => {
  const theme = useTheme();
  const dimantions = useWindowDimensions();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        width: dimantions.width,
        backgroundColor: theme.colors.card,
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
        <Text
          style={{ color: theme.colors.text, fontSize: 24, fontWeight: "700" }}
        >
          Good evening
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AnimatedButtonBase
            buttonStyle={{
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/Setting_fill.png")}
              style={{
                width: 28,
                height: 28,
                resizeMode: "contain",
                tintColor: theme.colors.text,
              }}
            />
          </AnimatedButtonBase>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenHeader;
