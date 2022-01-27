import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import styles from "./Home.styles";

export default function Home() {
  const [parkData, setParkData] = useState<any>(null);
  // NPS_API.fetchData("/parks?parkCode=abli");
  const loadData = useCallback(async () => {
    // handle the click event
    await NPS_API.fetchData("/parks?parkCode=redw")
      .then((res) => {
        if (!res) throw Error("No Res");

        setParkData(res.data.data[0]);
      })
      .catch((e) => console.log("e", e));
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const mainImgUrl = parkData ? parkData.images[0].url : "";
  console.log(mainImgUrl);
  return (
    <SafeAreaView style={styles.pageContain}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.5%",
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
    </SafeAreaView>
  );
}
