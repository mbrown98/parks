import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { DEV_IMAGE } from "../../../../api";

type Props = {};

export default function ParkPreviewCard({ ...props }): React.ReactElement {
  return (
    <Card style={{ padding: 5, borderRadius: 10 }}>
      <Image
        source={{ uri: DEV_IMAGE }}
        style={{ height: 175, width: 175, borderRadius: 10 }}
      />
      <Text>Yellowstone</Text>
      <Text>Colorado</Text>
    </Card>
  );
}
