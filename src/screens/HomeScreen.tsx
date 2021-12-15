import React from "react";
import { FlatList, View } from "react-native";
import { posts } from "../data/wallpapers";
import PostCard from "../components/PostCard";
import { Devider } from "../components";

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item, index }) => (
        <View>
          <PostCard key={index} post={item} />
          <Devider />
        </View>
      )}
    />
  );
};

export default HomeScreen;
