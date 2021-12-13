import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import WideButton from "../components/buttons/WideButton";
import CloseButton from "../components/CloseButton";

const AuthHomeScreen = () => {
  const [createAccunt, setCreateAccunt] = useState(true);
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={[{ flex: 1, position: "relative" }]}
    >
      <StatusBar hidden />

      <ScrollView style={styles.container}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.brandIcon}
        />
        {createAccunt ? <CreateAccountOptions /> : <LogInOptions />}

        <Text
          style={{
            opacity: 0.2,
            color: theme.colors.text,
            alignSelf: "center",
            paddingVertical: 24,
          }}
        >
          OR
        </Text>
        <WideButton
          onPress={() => {}}
          text="Continue with Google"
          style={{ backgroundColor: theme.colors.card }}
          activeScale={0.9}
          icon={<Image source={require("../../assets/icons/Google.png")} />}
          textStyle={{ color: theme.colors.text }}
        />
        <WideButton
          onPress={() => {}}
          text="Continue with Facebook"
          style={{ marginTop: 20, backgroundColor: theme.colors.card }}
          textStyle={{ color: theme.colors.text }}
          activeScale={0.9}
          icon={<Image source={require("../../assets/icons/Facebook.png")} />}
        />
        <TouchableOpacity
          onPress={() => setCreateAccunt(!createAccunt)}
          style={{ marginTop: 20, padding: 20, alignSelf: "center" }}
        >
          {createAccunt ? (
            <Text style={{ fontSize: 14, color: theme.colors.text }}>
              Already have an account?{" "}
              <Text style={{ fontWeight: "700" }}>Log-in</Text>
            </Text>
          ) : (
            <Text style={{ fontSize: 14, color: theme.colors.text }}>
              Don't have an account?{" "}
              <Text style={{ fontWeight: "700" }}>Sing-up</Text>
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
      <CloseButton style={{ top: 20, right: 20, position: "absolute" }} />
    </KeyboardAvoidingView>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    paddingHorizontal: 20,
    height: 52,
    borderRadius: 16,
    fontSize: 16,
    marginBottom: 10,
  },
  brandIcon: {
    width: 80,
    height: 80,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 80,
  },
});

const LogInOptions = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
          },
        ]}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
          },
        ]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        secureTextEntry
      />
      <WideButton
        onPress={() => {}}
        text="Log in"
        style={{ marginTop: 20 }}
        activeScale={0.9}
      />
    </View>
  );
};

const CreateAccountOptions = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const theme = useTheme();
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
          },
        ]}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
          },
        ]}
        placeholder="Create a password"
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        secureTextEntry
      />
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.card,
            color: theme.colors.text,
          },
        ]}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        keyboardType="visible-password"
        secureTextEntry
      />
      <WideButton
        onPress={() => {}}
        text="Continue"
        style={{ marginTop: 20 }}
        activeScale={0.9}
      />
    </View>
  );
};
