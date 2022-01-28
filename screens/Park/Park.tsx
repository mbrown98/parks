import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import ParkBaseInfo from "./components/ParkBaseInfo/ParkBaseInfo";
import ParkImageSlide from "./components/ParkImageSlide/ParkImageSlide";
import ParkMap from "./components/ParkMap/ParkMap";
import styles from "./Park.styles";
import { ParkPageProvider, useParkPageContext } from "./context/ParkContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList } from "../../types";

type ParkProps = {
  navigation: NativeStackNavigationProp<RootTabParamList, "Park">;
};

export default function Park({ navigation }: ParkProps): React.ReactElement {
  return (
    <ParkPageProvider>
      <SafeAreaView style={styles.pageContain}>
        <View style={{ flex: 1, padding: "2.5%" }}>
          <ParkImageSlide />
          <View style={{ height: 10 }} />
          <ParkBaseInfo />
          <ParkMap />
        </View>
      </SafeAreaView>
    </ParkPageProvider>
  );
}
