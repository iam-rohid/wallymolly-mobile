import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedButtonBase, Devider } from ".";

const Header = (props: NativeStackHeaderProps | BottomTabHeaderProps) => {
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
          justifyContent: "flex-start",
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
        },
        title: { color: theme.colors.text, fontSize: 22, fontWeight: "700" },
      }),
    [theme]
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.background}>
      <View style={styles.contianer}>
        {props.back && (
          <AnimatedButtonBase
            buttonStyle={{
              height: 38,
              width: 38,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Image
              source={require("../../assets/icons/Arrow_left.png")}
              style={{
                width: 32,
                height: 32,
                resizeMode: "contain",
                tintColor: theme.colors.text,
              }}
            />
          </AnimatedButtonBase>
        )}
        <Text style={styles.title}>{props.options.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
