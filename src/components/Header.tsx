import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedButtonBase, Devider } from ".";

const Header = (props: BottomTabHeaderProps | NativeStackHeaderProps) => {
  const theme = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        background: {
          backgroundColor: theme.colors.card,
        },
        contianer: {
          height: 56,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        },
        title: { color: theme.colors.text, fontSize: 24, fontWeight: "700" },
      }),
    [theme]
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.background}>
      {props.navigation.canGoBack() && (
        <AnimatedButtonBase
          buttonStyle={{
            height: 38,
            width: 38,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/icons/Arrow_left.png")}
            style={{
              width: 28,
              height: 28,
              resizeMode: "contain",
            }}
          />
        </AnimatedButtonBase>
      )}
      <View style={styles.contianer}>
        <Text style={styles.title}>{props.options.title}</Text>
      </View>
      <Devider />
    </SafeAreaView>
  );
};

export default Header;
