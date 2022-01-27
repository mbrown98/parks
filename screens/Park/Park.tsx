import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import ParkBaseInfo from "./components/ParkBaseInfo/ParkBaseInfo";
import ParkImageSlide from "./components/ParkImageSlide/ParkImageSlide";
import ParkMap from "./components/ParkMap/ParkMap";
import styles from "./Park.styles";
import { ParkPageProvider, useParkPageContext } from "./ParkContext";

export default function Park() {
  // const { parkData } = useParkPageContext();
  // const mainImgUrl = parkData ? parkData.images[2].url : "";
  // console.log(mainImgUrl);
  // const parkName = parkData ? parkData.fullName : "";

  return (
    <ParkPageProvider>
      <SafeAreaView style={styles.pageContain}>
        <View style={{ flex: 1, padding: "2.5%" }}>
          <ParkImageSlide />
          <ParkBaseInfo />
          <ParkMap />
        </View>
      </SafeAreaView>
    </ParkPageProvider>
  );
}
