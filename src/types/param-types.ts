import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  AuthNavigator: undefined;
  HomeNavigator: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Home: undefined;
  LogIn: {
    email: string;
  };
  Register: undefined;
};

export type HomeStackParamList = {
  TabNavigator: undefined;
  PostDetails: {
    postId: number;
  };
  WallpaperDownlaod: {
    postId: number;
  };
};
