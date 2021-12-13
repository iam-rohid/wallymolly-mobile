import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackParamList, WallPaperType } from "../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AnimatedButtonBase from "./AnimatedButtonBase";

type PostDetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "PostDetails"
>;

const LargePost = ({ wallpaper }: { wallpaper: WallPaperType }) => {
  const navigation = useNavigation<PostDetailsScreenNavigationProp>();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("PostDetails", {
              postId: wallpaper.id,
            });
            console.log(wallpaper.id);
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              resizeMode: "cover",
            }}
            source={{
              uri: wallpaper.imgUri,
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 20,
          }}
          pointerEvents="box-none"
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ flex: 1 }} />
            <SideButton
              icon={
                <Ionicons
                  name="eye-outline"
                  size={32}
                  color="#fff"
                  style={{
                    ...styles.shadow,
                  }}
                />
              }
              text="3.4k"
            />
            <SideButton
              icon={
                <Ionicons
                  name="heart-outline"
                  size={32}
                  color="#fff"
                  style={{
                    ...styles.shadow,
                  }}
                />
              }
              text="2.75k"
            />
            <SideButton
              icon={
                <Ionicons
                  name="download-outline"
                  size={32}
                  color="#fff"
                  style={{
                    ...styles.shadow,
                  }}
                />
              }
              text="1.4k"
              onPress={() => {}}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              style={{
                width: 48,
                height: 48,
                borderRadius: 48,
              }}
              source={{
                uri: wallpaper.authur.avatar,
              }}
            />
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 16,
                  ...styles.shadow,
                }}
              >
                {wallpaper.authur.name}
              </Text>
              <Text style={{ color: "#fff", ...styles.shadow }}>
                @{wallpaper.authur.id}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LargePost;

const SideButton = ({
  icon,
  text,
  onPress,
}: {
  icon: JSX.Element;
  onPress?: () => void;
  text?: string;
}) => {
  return (
    <AnimatedButtonBase
      onPress={onPress}
      containerStyle={{}}
      buttonStyle={{
        padding: 6,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {icon}
        {text && (
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              paddingTop: 6,
              ...styles.shadow,
            }}
          >
            {text}
          </Text>
        )}
      </View>
    </AnimatedButtonBase>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});
