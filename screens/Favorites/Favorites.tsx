import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "../../types";
import styles from "./Favorites.styles";

type FavoritesProps = {
  navigation: NativeStackNavigationProp<RootTabParamList, "Favorites">;
};

export default function Favorites({ navigation }: FavoritesProps) {
  const DEV_FAVS = [
    {
      park: "Yosemite National Park",
      image:
        "https://www.nps.gov/common/uploads/structured_data/05383E91-AA28-2DDC-AB517507594F9FA6.jpg",
      parkCode: "yose",
    },
    {
      park: "Alleghany",
      image:
        "https://www.nps.gov/common/uploads/structured_data/2C12F155-DE91-DD44-9108A954EB6F3DF6.jpg",
      parkCode: "alpo",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 5 }}>
        {DEV_FAVS.map((opt, i) => {
          return (
            <Fragment key={i}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Park", { parkId: opt.parkCode })
                }
              >
                <Card style={{ height: 150, borderRadius: 20 }}>
                  <ImageBackground
                    source={{
                      uri: opt.image,
                    }}
                    style={{
                      height: "100%",
                      width: "100%",
                      opacity: 0.8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    imageStyle={{ borderRadius: 20 }}
                    resizeMode="cover"
                  >
                    <Text
                      style={{
                        fontFamily: "JosefinSans_700Bold",
                        color: "white",
                        fontSize: 25,
                      }}
                    >
                      {opt.park}
                    </Text>
                  </ImageBackground>
                </Card>
              </TouchableOpacity>
              <View style={{ height: 10 }} />
            </Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
