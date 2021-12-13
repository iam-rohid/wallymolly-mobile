import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import {
  useWindowDimensions,
  Image,
  View,
  Text,
  Animated,
  ImageStyle,
  ViewStyle,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedButtonBase from "../components/AnimatedButtonBase";
import CloseButton from "../components/CloseButton";
import PostActionRow from "../components/PostActionRow";
import UserInfoBar from "../components/UserInfoBar";
import { posts } from "../data/wallpapers";
import { HomeStackParamList } from "../types";

type Props = NativeStackScreenProps<HomeStackParamList, "PostDetails">;

const PostDetailsScreen = ({
  route: {
    params: { postId },
  },
  navigation,
}: Props) => {
  const post = posts[postId];
  const dimensions = useWindowDimensions();
  const theme = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        {
          width: dimensions.width,
          height: dimensions.height,
          backgroundColor: theme.colors.card,
        },
      ]}
    >
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("WallpaperDownlaod", { postId: postId });
          }}
        >
          <Animated.Image
            source={{ uri: post.imgUri }}
            style={styles.coverImage(scrollY, dimensions.width)}
          />
        </TouchableWithoutFeedback>
        <SafeAreaView
          style={{ backgroundColor: theme.colors.card }}
          edges={["bottom", "left", "right"]}
        >
          <PostActionRow post={post} />
          <UserInfoBar />

          <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 14,
                overflow: "hidden",
                color: theme.colors.text,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </View>

          <Text style={{ color: theme.colors.text, fontSize: 16, padding: 10 }}>
            More from{" "}
            <Text style={{ color: theme.colors.text, fontWeight: "600" }}>
              Jhon Doe
            </Text>
          </Text>

          <View style={styles.morePostsListContainer}>
            {posts.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  navigation.push("PostDetails", { postId: item.id });
                }}
              >
                <View
                  style={{
                    aspectRatio: 1,
                    width: "50%",
                    padding: 5,
                  }}
                >
                  <Image
                    source={{ uri: item.imgUri }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 8,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </SafeAreaView>
      </Animated.ScrollView>

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

export default PostDetailsScreen;

const styles = {
  container: {
    position: "relative",
  } as ViewStyle,
  closeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
  } as ViewStyle,
  imageContainer: {
    position: "relative",
  },
  coverImage: (
    scrollY: Animated.Value,
    width: number
  ): Animated.WithAnimatedObject<ImageStyle> => ({
    resizeMode: "cover",
    width: width,
    height: width,
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [-width, 0, width, width + 1],
          outputRange: [-width / 2, 0, width / 2, width / 2],
        }),
      },
      {
        scale: scrollY.interpolate({
          inputRange: [-width, 0, width, width + 1],
          outputRange: [2, 1, 1, 1],
        }),
      },
    ],
  }),
  morePostsListContainer: {
    dipslay: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  } as ViewStyle,
};
