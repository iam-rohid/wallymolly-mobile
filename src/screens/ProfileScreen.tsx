import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User, signOut } from "firebase/auth";
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { AnimatedButtonBase } from "../components";
import { auth } from "../firebase";
import { RootStackParamList } from "../types";

const userPhoto =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const ProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "HomeNavigator">
    >();
  const theme = useTheme();
  useEffect(() => {
    const user = auth.currentUser;
    setUser(user);
  }, []);

  const handleLogOut = () => {
    signOut(auth);
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        contianer: {},
        userContainer: {
          flexDirection: "row",
          padding: 10,
          backgroundColor: theme.colors.card,
        },
        userInfo: {
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingHorizontal: 10,
        },
        userEmail: {
          fontSize: 16,
          opacity: 0.8,
        },
        userName: {
          fontSize: 24,
          fontWeight: "700",
        },
        userPhoto: {
          width: 64,
          height: 64,
          borderRadius: 8,
          resizeMode: "cover",
        },
        spacer: {
          height: 20,
        },
        buttonIcon: {
          tintColor: theme.colors.text,
          width: "100%",
          height: "100%",
        },
      }),
    [theme]
  );

  if (!user) return null;

  return (
    <ScrollView style={styles.contianer}>
      <TouchableOpacity
        style={styles.userContainer}
        onPress={() => {
          navigation.navigate("HomeNavigator", {
            screen: "UserDetails",
            params: {
              userId: undefined,
            },
          });
        }}
      >
        <Image source={{ uri: userPhoto }} style={styles.userPhoto} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.displayName || "No Name"}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Button
        name="Pined Posts"
        icon={
          <Image
            source={require("../../assets/icons/Pin.png")}
            style={styles.buttonIcon}
          />
        }
      />
      <Button
        name="View Profile"
        icon={
          <Image
            source={require("../../assets/icons/User.png")}
            style={styles.buttonIcon}
          />
        }
        onPress={() => {
          navigation.navigate("HomeNavigator", {
            screen: "UserDetails",
            params: {
              userId: undefined,
            },
          });
        }}
      />
      <Button
        name="Edit Profile"
        icon={
          <Image
            source={require("../../assets/icons/Edit.png")}
            style={styles.buttonIcon}
          />
        }
        onPress={() => {
          navigation.navigate("HomeNavigator", { screen: "EditUser" });
        }}
      />
      <Button
        name="Preferences"
        icon={
          <Image
            source={require("../../assets/icons/Settings.png")}
            style={styles.buttonIcon}
          />
        }
      />
      <Button
        name="Log Out"
        icon={
          <Image
            source={require("../../assets/icons/Sign_out.png")}
            style={styles.buttonIcon}
          />
        }
        onPress={handleLogOut}
      />
    </ScrollView>
  );
};

export default ProfileScreen;

const Button = ({
  onPress,
  name,
  icon,
  rightArrow,
  disabled,
}: {
  onPress?: () => void;
  name: string;
  icon?: React.ReactNode;
  rightArrow?: boolean;
  disabled?: boolean;
}) => {
  const theme = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        contianer: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 48,
        },
        name: {
          flex: 1,
          fontSize: 16,
          color: theme.colors.text,
        },
        iconContainer: {
          height: 28,
          width: 28,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        },
        rightContainer: {
          height: 32,
          width: 32,
          alignItems: "center",
          justifyContent: "center",
        },
        rightIcon: {
          tintColor: theme.colors.text,
          width: 32,
          height: 32,
          opacity: 0.2,
        },
      }),
    [theme]
  );

  return (
    <AnimatedButtonBase
      activeScale={0.9}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={styles.contianer}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.name}>{name}</Text>

      {rightArrow && (
        <View style={styles.rightContainer}>
          <Image
            source={require("../../assets/icons/Arrow_right.png")}
            style={styles.rightIcon}
          />
        </View>
      )}
    </AnimatedButtonBase>
  );
};
