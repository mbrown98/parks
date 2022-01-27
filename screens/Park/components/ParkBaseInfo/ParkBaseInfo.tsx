import React from "react";
import { View, Text } from "react-native";
import { useParkPageContext } from "../../ParkContext";

export default function ParkBaseInfo() {
  const { parkData } = useParkPageContext();
  console.log("park data", parkData);
  const parkName = parkData ? parkData.fullName : "";
  return (
    <View>
      <Text style={{ fontFamily: "JosefinSans_500Medium", fontSize: 30 }}>
        {parkName}
      </Text>
    </View>
  );
}
