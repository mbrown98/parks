import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
        "https://www.nps.gov/common/uploads/structured_data/05383E91-AA28-2DDC-AB517507594F9FA6.jpg",
      parkCode: "alpo",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 2.5 }}>
        <Text>Favorites</Text>
        {DEV_FAVS.map((opt, i) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Park", { parkId: opt.parkCode })
              }
            >
              <Text>{opt.park}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
