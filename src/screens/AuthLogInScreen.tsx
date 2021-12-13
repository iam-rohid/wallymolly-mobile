import { useNavigation, useTheme } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import WideButton from "../components/buttons/WideButton";
import CloseButton from "../components/CloseButton";
import { AuthStackParamList } from "../types";

type Props = NativeStackScreenProps<AuthStackParamList, "LogIn">;

const AuthLogInScreen = ({
  route: {
    params: { email },
  },
}: Props) => {
  const [emailVlaue, setEmailVlaue] = useState(email);
  const [passwordValue, setPasswordValue] = useState("");
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, "Home">>();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={[{ flex: 1, position: "relative" }]}
    >
      <ScrollView style={styles.container}>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: theme.colors.card,
              color: theme.colors.text,
              marginTop: 40,
            },
          ]}
          placeholder="Email"
          keyboardType="email-address"
          value={emailVlaue}
          onChangeText={setEmailVlaue}
          editable={false}
        />
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: theme.colors.card,
              color: theme.colors.text,
              marginTop: 10,
            },
          ]}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry
          value={passwordValue}
          onChangeText={setPasswordValue}
        />
        <WideButton
          onPress={() => {
            navigation.navigate("LogIn", { email: "hello" });
          }}
          text="Log In"
          style={{ marginTop: 40 }}
          activeScale={0.9}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthLogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 100,
  },
  textInput: {
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 12,
    fontSize: 16,
  },
  brandIcon: {
    width: 140,
    height: 140,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 100,
  },
});
