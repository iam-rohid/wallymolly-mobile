import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, ImageStyle, StyleProp, ImageProps } from "react-native";
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
} from "../screens";
import { TabStackParamList } from "../types";
import { BottomNavBarItem, Header } from "../components";

const { Screen, Navigator } = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const theme = useTheme();

  const getTabIcon = ({
    color,
    focused,
    activeIcon,
    icon,
  }: {
    color: string;
    focused: boolean;
    size: number;
    activeIcon: ImageProps;
    icon: ImageProps;
  }) => (
    <Image source={focused ? activeIcon : icon} style={styles.icon(color)} />
  );
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
          backgroundColor: theme.dark ? "#000" : "#fff",
          borderColor: theme.colors.border,
          borderTopWidth: 1,
        },
        tabBarButton: BottomNavBarItem,
        header: (props) => <Header {...props} />,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: (prop) =>
            getTabIcon({
              ...prop,
              activeIcon: require("../../assets/icons/Home.png"),
              icon: require("../../assets/icons/HomeOutline.png"),
            }),
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: (prop) =>
            getTabIcon({
              ...prop,
              activeIcon: require("../../assets/icons/Search.png"),
              icon: require("../../assets/icons/SearchOutline.png"),
            }),
        }}
      />
      <Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Notifications",
          tabBarIcon: (prop) =>
            getTabIcon({
              ...prop,
              activeIcon: require("../../assets/icons/Bell.png"),
              icon: require("../../assets/icons/BellOutline.png"),
            }),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Me",
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
