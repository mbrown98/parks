import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useParkPageContext } from "../../ParkContext";
import styles from "./ParkImageSlide.styles";

export default function ParkImageSlide() {
  const { parkData } = useParkPageContext();
  const mainImgUrl = parkData ? parkData.images[2].url : "";
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
        width: "100%",
      }}
    >
      <ImageBackground
        source={{
          uri: mainImgUrl,
        }}
        resizeMode="cover"
        style={styles.bgImg}
        imageStyle={{ borderRadius: 10 }}
      ></ImageBackground>
    </View>
  );
}
