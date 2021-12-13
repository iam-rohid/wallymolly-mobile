import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet, ImageStyle, StyleProp } from "react-native";

import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
} from "../screens";
import { TabStackParamList } from "../types";
import AnimatedButtonBase from "../components/AnimatedButtonBase";
import HomeScreenHeader from "../components/HomeScreenHeader";

const { Screen, Navigator } = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.dark ? "#fff" : "#000",
        tabBarInactiveTintColor: theme.dark
          ? "rgba(255,255,255,.5)"
          : "rgba(0,0,0,.5)",
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: theme.dark ? "#000" : "#fff",
        },
        tabBarButton: BottomNavBarItem,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HomeScreenHeader />,
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/Home.png")
                  : require("../../assets/icons/HomeOutline.png")
              }
              style={styles.icon(color)}
            />
          ),
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/Search.png")
                  : require("../../assets/icons/SearchOutline.png")
              }
              style={styles.icon(color)}
            />
          ),
        }}
      />
      <Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/Bell.png")
                  : require("../../assets/icons/BellOutline.png")
              }
              style={styles.icon(color)}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.avatarContainer(color, focused)}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                }}
                style={styles.avatarImage}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;

const BottomNavBarItem = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
}: BottomTabBarButtonProps) => {
  return (
    <AnimatedButtonBase
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeScale={0.8}
      buttonStyle={{ flex: 1 }}
      containerStyle={{ flex: 1 }}
    >
      {children}
    </AnimatedButtonBase>
  );
};

const styles = {
  icon: (color: string): StyleProp<ImageStyle> => ({
    width: 32,
    height: 32,
    resizeMode: "contain",
    tintColor: color,
  }),
  avatarContainer: (
    color: string,
    focused?: boolean
  ): StyleProp<ImageStyle> => ({
    borderColor: color,
    width: 32 + 6,
    height: 32 + 6,
    borderRadius: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: focused ? 2 : 0,
  }),
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
};
