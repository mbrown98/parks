import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { NPS_API } from "../../api";
import styles from "./Park.styles";

export default function Park() {
  const [parkData, setParkData] = useState<any>(null);
  // NPS_API.fetchData("/parks?parkCode=abli");
  const loadData = useCallback(async () => {
    // handle the click event
    await NPS_API.fetchData("/parks?parkCode=olym")
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
  const parkName = parkData ? parkData.fullName : "";

  return (
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
  );
}
