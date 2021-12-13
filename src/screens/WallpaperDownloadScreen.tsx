import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedButtonBase from "../components/AnimatedButtonBase";
import CloseButton from "../components/CloseButton";
import { posts } from "../data/wallpapers";
import { HomeStackParamList } from "../types";
type Props = NativeStackScreenProps<HomeStackParamList, "WallpaperDownlaod">;

const WallpaperDownloadScreen = ({
  route: {
    params: { postId },
  },
  navigation,
}: Props) => {
  const post = posts[postId];
  const dimensions = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: "relative",
      }}
    >
      <StatusBar hidden />
      <Image
        source={{ uri: post.imgUri }}
        style={{ flex: 1, resizeMode: "cover" }}
      />
      <AnimatedButtonBase
        containerStyle={{
          position: "absolute",
          bottom: 20 + safeAreaInsets.bottom,
          left: 20,
          right: 20,
          height: 56,
        }}
        activeScale={0.9}
        buttonStyle={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>
          Downlaod
        </Text>
      </AnimatedButtonBase>
      <CloseButton
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 40,
          height: 40,
        }}
      />
    </View>
  );
};

export default WallpaperDownloadScreen;
