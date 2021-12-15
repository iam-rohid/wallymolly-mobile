import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
  HomeNavigator: NavigatorScreenParams<HomeStackParamList>;
};

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Home: undefined;
};

export type HomeStackParamList = {
  TabNavigator: NavigatorScreenParams<TabStackParamList>;
  PostDetails: {
    postId: number;
  };
  WallpaperDownlaod: {
    postId: number;
  };
  EditUser: undefined;
  UserDetails: {
    userId?: string;
  };
};
