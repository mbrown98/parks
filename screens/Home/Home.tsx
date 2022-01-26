import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./Home.styles";

export default function Home() {
  return (
    <View style={styles.pageContain}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1551336841-32a98a5917eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
        }}
        resizeMode="cover"
        style={styles.bgImg}
      ></ImageBackground>
    </View>
  );
}
