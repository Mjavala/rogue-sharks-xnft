import { ResizeMode, Video } from "expo-av";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Screen } from "../components/Screen";

export function HomeScreen() {
  console.log(Dimensions.get('window').width, Dimensions.get('window').height);
  return (
    <Screen>
      <Video
        source={require("../assets/rebirth.mov")}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay={true}
        style={styles.video}
        videoStyle={styles.videoStyle}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100vw',
    height: '100vh',
  },
  videoStyle: {
    width: '100vw',
    height: '100vh',
  },
});
