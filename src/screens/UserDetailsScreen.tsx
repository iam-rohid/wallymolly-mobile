import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { User } from "firebase/auth";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { AnimatedButtonBase, CloseButton, Devider } from "../components";
import WideButton from "../components/buttons/WideButton";
import { auth } from "../firebase";
import { HomeStackParamList } from "../types";

const userPhoto =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
type Props = NativeStackScreenProps<HomeStackParamList, "UserDetails">;
const UserDetailsScreen = ({ navigation }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    const user = auth.currentUser;
    setUser(user);
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: dimensions.width,
          backgroundColor: theme.colors.card,
          flex: 1,
        },
        coverImage: {
          resizeMode: "cover",
          width: dimensions.width,
          height: dimensions.width,
        },
      }),
    [theme]
  );

  return (
    <View style={styles.container}>
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
            navigation.navigate("EditUser");
          }}
        >
          <Animated.Image
            source={{ uri: userPhoto }}
            style={[
              styles.coverImage,
              {
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [
                        -dimensions.width,
                        0,
                        dimensions.width,
                        dimensions.width + 1,
                      ],
                      outputRange: [
                        -dimensions.width / 2,
                        0,
                        dimensions.width / 2,
                        dimensions.width / 2,
                      ],
                    }),
                  },
                  {
                    scale: scrollY.interpolate({
                      inputRange: [
                        -dimensions.width,
                        0,
                        dimensions.width,
                        dimensions.width + 1,
                      ],
                      outputRange: [2, 1, 1, 1],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableWithoutFeedback>
        <SafeAreaView
          style={{ backgroundColor: theme.colors.card }}
          edges={["bottom", "left", "right"]}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <WideButton
                onPress={() => {
                  navigation.navigate("EditUser");
                }}
                text="Edit Details"
                style={{
                  backgroundColor: "transparent",
                  borderColor: theme.colors.border,
                  borderWidth: 1,
                  height: 44,
                }}
                textStyle={{
                  color: theme.colors.text,
                }}
              />
            </View>
            <ListItem title="Display Name" value="Rohidul Islam" />
            <Devider />
            <ListItem title="Username" value="@rohid_23" />
            <Devider />
            <ListItem title="Email" value="rohidul@email.com" />
            <Devider />
            <ListItem
              title="Bio"
              value="sa flas dfljas dlfjalsdf lasjdf lasjdf"
            />
            <Devider />
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

export default UserDetailsScreen;

const ListItem = ({
  title,
  value,
  onPress,
}: {
  title: string;
  value: string;
  onPress?: () => void;
}) => {
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: "column",
          paddingHorizontal: 20,
          paddingVertical: 10,
        },
        title: {
          fontSize: 12,
          opacity: 0.7,
          marginBottom: 4,
        },
        value: {
          fontSize: 16,
        },
      }),
    [theme]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};
