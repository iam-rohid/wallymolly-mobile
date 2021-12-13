import React from "react";
import { FlatList } from "react-native";
import { posts } from "../data/wallpapers";
import PostCard from "../components/PostCard";

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item, index }) => <PostCard key={index} post={item} />}
    />
  );
};

export default HomeScreen;
