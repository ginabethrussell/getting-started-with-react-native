import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import * as WebBrowser from "expo-web-browser";

const DebuggingScreen = () => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenwrapper}
    >
      <Text style={styles.title}>Debugging Your App</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#383838",
          marginBottom: 20,
          height: 220,
        }}
      >
        <LottieView
          ref={animation}
          loop={true}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/debugging.json")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenwrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#383838",
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 5,
  },
  docslink: {
    fontWeight: "bold",
    color: "#c01f29",
  },
  tutorialLink: {
    color: "#c01f29",
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#383838",
    marginTop: 20,
    marginBottom: 10,
  },
  bulletItem: {
    fontSize: 18,
    marginVertical: 3,
    fontWeight: "bold",
  },
  bulletText: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 3,
    justifyContent: "center",
  },
});

export default DebuggingScreen;
