import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { NPS_API } from "../../api";
import ParkPreviewCard from "./components/ParkPreviewCard/ParkPreviewCard";
import styles from "./Home.styles";
import { HomePageProvider } from "./HomeContext";

export default function Home() {
  const loadData = useCallback(async () => {
    // handle the click event
    await NPS_API.fetchData("/activities/parks?limit=83")
      .then((res) => {
        if (!res) throw Error("No Res");
        const data = res.data.map((opt) => opt.name);
        console.log("res", data);
      })
      .catch((e) => console.log("e", e));
  }, []);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <HomePageProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text>Where do you want to go?</Text>
          </View>
          <View>
            <Text>U</Text>
          </View>
        </View>
        <Searchbar
          placeholder="Search"
          onChangeText={() => {}}
          value={() => {}}
        />
        <Text>Explore Parks</Text>
        <View>
          <ScrollView horizontal={true}>
            {[
              "Arts and Culture",
              "Astronomy",
              "Auto and ATV",
              "Biking",
              "Boating",
              "Camping",
              "Canyoneering",
              "Caving",
              "Climbing",
              "Compass and GPS",
              "Dog Sledding",
              "Fishing",
              "Flying",
            ].map((opt, i) => (
              <Text>{opt}</Text>
            ))}
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal={true}>
            {[1, 2, 3].map((opt, i) => (
              <ParkPreviewCard />
            ))}
          </ScrollView>
        </View>

        <Text>Categories</Text>
      </SafeAreaView>
    </HomePageProvider>
  );
}
