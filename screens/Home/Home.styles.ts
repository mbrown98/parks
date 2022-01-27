import { StyleSheet, Dimensions } from "react-native";
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default styles;
