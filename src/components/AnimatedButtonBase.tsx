import React, { useRef } from "react";
import {
  Animated,
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const AnimatedButtonBase = ({
  onPress,
  children,
  onPressIn,
  onPressOut,
  containerStyle,
  buttonStyle,
  activeScale,
  disabled,
}: {
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  activeScale?: number;
  disabled?: boolean;
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  return (
    <Animated.View
      style={[
        containerStyle,
        {
          transform: [
            {
              scale: scaleAnim,
            },
          ],
        },
      ]}
    >
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={(event) => {
          onPressIn && onPressIn(event);
          Animated.spring(scaleAnim, {
            toValue: activeScale !== undefined ? activeScale : 0.8,
            useNativeDriver: true,
          }).start();
        }}
        onPressOut={(event) => {
          onPressOut && onPressOut(event);
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
        disabled={disabled}
      >
        <View style={[buttonStyle]}>{children}</View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default AnimatedButtonBase;
