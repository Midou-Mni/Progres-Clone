import React from "react";
import { View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

function Cards() {
  const rotateY = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotateY.value}deg` }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    };
  });

  const handleFlip = (direction) => {
    if (direction === "right") {
      rotateY.value = withTiming(rotateY.value + 180, { duration: 300 });
    } else if (direction === "left") {
      rotateY.value = withTiming(rotateY.value - 180, { duration: 300 });
    }
  };

  const onGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;
    if (translationX > 50) {
      handleFlip("right");
    } else if (translationX < -50) {
      handleFlip("left");
    }
  };

  return (
    <SafeAreaView style={globalStyles.safe}>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <View style={globalStyles.touchable}>
            <View style={globalStyles.containerAnimated}>
              <Animated.View
                style={[
                  globalStyles.cardAnimated,
                  frontAnimatedStyle,
                  globalStyles.front,
                ]}
              >
                <Image
                  source={require("../images/card.jpg")}
                  style={globalStyles.cardImg}
                />
              </Animated.View>

              <Animated.View
                style={[
                  globalStyles.cardAnimated,
                  backAnimatedStyle,
                  globalStyles.back,
                ]}
              >
                <Image
                  source={require("../images/backCard.jpg")}
                  style={globalStyles.cardImg}
                />
              </Animated.View>
            </View>
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default Cards;
