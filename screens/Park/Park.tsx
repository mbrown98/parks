import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import styles from "./Park.styles";
import { ParkPageProvider, useParkPageContext } from "./ParkContext";

export default function Park() {
  const { parkData } = useParkPageContext();
  const mainImgUrl = parkData ? parkData.images[2].url : "";
  console.log(mainImgUrl);
  const parkName = parkData ? parkData.fullName : "";

  return (
    <ParkPageProvider>
      <SafeAreaView style={styles.pageContain}>
        <View style={{ flex: 1, padding: "2.5%" }}>
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
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontFamily: "JosefinSans_500Medium", fontSize: 30 }}>
              {parkName}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ParkPageProvider>
  );
}
