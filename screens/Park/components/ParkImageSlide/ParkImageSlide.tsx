import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useParkPageContext } from "../../ParkContext";
import styles from "./ParkImageSlide.styles";

export default function ParkImageSlide() {
  const { parkData } = useParkPageContext();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  if (!parkData) return null;

  const parkImages: any = parkData.images;

  return (
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
          uri: parkImages[selectedImage].url,
        }}
        resizeMode="cover"
        style={styles.bgImg}
        imageStyle={{ borderRadius: 20 }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 10,
          }}
        >
          <ScrollView
            style={{
              backgroundColor: "#80808086",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
            horizontal={true}
          >
            {parkImages.map((opt: any, i: number) => {
              return (
                <Fragment key={i}>
                  <TouchableOpacity onPress={() => setSelectedImage(i)}>
                    <Image
                      source={{
                        uri: opt.url,
                      }}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                        opacity: selectedImage === i ? 0.5 : 1,
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{ width: 5 }} />
                </Fragment>
              );
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
