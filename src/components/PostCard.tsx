import React from "react";
import { View, Image, TouchableWithoutFeedback, Text } from "react-native";
import { HomeStackParamList, WallPaperType } from "../types";
import AnimatedButtonBase from "../components/AnimatedButtonBase";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import PostActionRow from "./PostActionRow";
import UserInfoBar from "./UserInfoBar";

const PostCard = ({ post }: { post: WallPaperType }) => {
  const theme = useTheme();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HomeStackParamList, "PostDetails">
    >();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.card,
      }}
    >
      <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
        <UserInfoBar />
        <Text
          numberOfLines={1}
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
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.push("PostDetails", { postId: post.id });
        }}
      >
        <Image
          source={{ uri: post.imgUri }}
          style={{
            width: "100%",
            resizeMode: "cover",
            aspectRatio: 1,
          }}
        />
      </TouchableWithoutFeedback>
      <View style={{ paddingHorizontal: 10 }}>
        <PostActionRow post={post} />
      </View>
    </View>
  );
};

export default PostCard;
