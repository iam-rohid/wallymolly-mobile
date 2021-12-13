import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { HomeStackParamList, WallPaperType } from "../types";
import AnimatedButtonBase from "./AnimatedButtonBase";

const PostActionRow = ({ post }: { post: WallPaperType }) => {
  const theme = useTheme();
  const [love, setLove] = useState(false);
  const [pined, setPined] = useState(false);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HomeStackParamList, "PostDetails">
    >();
  return (
    <View style={{ flexDirection: "row" }}>
      <AnimatedButtonBase
        buttonStyle={styles.button}
        containerStyle={{ flex: 1 }}
        onPress={() => {
          setLove(!love);
        }}
      >
        <Image
          source={
            love
              ? require("../../assets/icons/Love_fill.png")
              : require("../../assets/icons/Love.png")
          }
          style={[
            styles.icon,
            {
              tintColor: theme.colors.text,
            },
          ]}
        />
        <Text style={[styles.text, { color: theme.colors.text }]}>239</Text>
      </AnimatedButtonBase>
      <AnimatedButtonBase
        buttonStyle={styles.button}
        onPress={() => {
          setPined(!pined);
        }}
        containerStyle={{ flex: 1 }}
      >
        <Image
          source={
            pined
              ? require("../../assets/icons/Pin_fill.png")
              : require("../../assets/icons/Pin.png")
          }
          style={[
            styles.icon,
            {
              tintColor: theme.colors.text,
            },
          ]}
        />
        <Text style={[styles.text, { color: theme.colors.text }]}>45</Text>
      </AnimatedButtonBase>
      <AnimatedButtonBase
        buttonStyle={styles.button}
        containerStyle={{ flex: 1 }}
        onPress={() => {
          navigation.push("WallpaperDownlaod", { postId: post.id });
        }}
      >
        <Image
          source={require("../../assets/icons/Download.png")}
          style={[
            styles.icon,
            {
              tintColor: theme.colors.text,
            },
          ]}
        />
        <Text style={[styles.text, { color: theme.colors.text }]}>23</Text>
      </AnimatedButtonBase>
    </View>
  );
};

export default PostActionRow;

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
  },
  text: {
    marginLeft: 4,
    fontSize: 14,
  },
});
