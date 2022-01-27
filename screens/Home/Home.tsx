import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import styles from "./Home.styles";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text>Where do you want to go?</Text>
        </View>
        <View>
          <Text>U</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
