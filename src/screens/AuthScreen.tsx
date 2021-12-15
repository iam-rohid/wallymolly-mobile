import { useNavigation, useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
import { auth } from "../firebase";
import { validateEmail } from "../utils/email-validate";

const AuthScreen = () => {
  const navigation = useNavigation();
  const [createAccunt, setCreateAccunt] = useState(false);
  const [loading, setLoading] = useState(false);
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
        {createAccunt ? (
          <CreateAccountOptions loading={loading} setLoading={setLoading} />
        ) : (
          <LogInOptions loading={loading} setLoading={setLoading} />
        )}

        <Text
          style={[
            styles.orText,
            {
              color: theme.colors.text,
            },
          ]}
        >
          OR
        </Text>
        <WideButton
          onPress={() => {}}
          text="Continue with Google"
          style={{
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            borderWidth: 1,
          }}
          activeScale={0.9}
          icon={<Image source={require("../../assets/icons/Google.png")} />}
          textStyle={{ color: theme.colors.text }}
        />
        <WideButton
          onPress={() => {}}
          text="Continue with Facebook"
          style={{
            marginTop: 20,
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.border,
            borderWidth: 1,
          }}
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
      {navigation.canGoBack() && (
        <CloseButton style={{ top: 20, right: 20, position: "absolute" }} />
      )}
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const LogInOptions = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (value: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  const handleLogIn = async () => {
    if (loading) return; // Already loading
    if (email === "" || password === "") return; // Email or password empty
    if (!validateEmail(email)) return; // Email not validate
    if (password.length < 6) return; // Password is less than 6 characters long

    // Create account
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.email);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: theme.colors.border,
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
            borderColor: theme.colors.border,
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
        onPress={handleLogIn}
        text="Log in"
        style={{ marginTop: 20 }}
        activeScale={0.9}
      />
    </View>
  );
};

const CreateAccountOptions = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (value: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const theme = useTheme();

  const handleCreateAccount = async () => {
    if (loading) return; // Already loading
    if (email === "" || password === "" || confirmPassword === "") return; // Email or password empty
    if (!validateEmail(email)) return; // Email not validate
    if (password.length < 6) return; // Password is less than 6 characters long
    if (password !== confirmPassword) return; // Passswords didn't matched

    // Create account
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user.email);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: theme.colors.border,
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
            borderColor: theme.colors.border,
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
            borderColor: theme.colors.border,
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
        onPress={handleCreateAccount}
        text="Continue"
        style={{ marginTop: 20 }}
        activeScale={0.9}
      />
    </View>
  );
};

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
    borderWidth: 1,
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
  orText: {
    opacity: 0.2,
    alignSelf: "center",
    paddingVertical: 24,
  },
});
