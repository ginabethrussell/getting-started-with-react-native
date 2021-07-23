import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import BackButtonHeader from "../components/BackButtonHeader";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const HowItWorksScreen = ({ navigation }) => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <View style={styles.pageWrapper}>
      <BackButtonHeader
        title="How It Works"
        backgroundColor="#c01f29"
        color="#ffffff"
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.stepWrapper}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={30}
                color="#383838"
              />
              <Text style={styles.stepHeader}>Step 1</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepText}>
                Create React components with React Native Elements - not HTML
              </Text>
            </View>
            <View style={styles.stepWrapper}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={30}
                color="#383838"
              />
              <Text style={styles.stepHeader}>Step 2</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepText}>
                React Native Primitive Components are compiled into native
                widgets and native code
              </Text>
            </View>
            <View style={styles.stepWrapper}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={30}
                color="#383838"
              />
              <Text style={styles.stepHeader}>Step 3</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepText}>
                JavaScript code is not compiled. It runs on a special thread
                hosted by React Native
              </Text>
            </View>
            <View style={styles.stepWrapper}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={30}
                color="#383838"
              />
              <Text style={styles.stepHeader}>Step 4</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepText}>
                JavaScript code runs on a virtual machine connected by a Bridge
                to Native Platform components, platform modules, and apis
              </Text>
            </View>
          </View>
          <LottieView
            ref={animation}
            loop={true}
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/howitworks.json")}
          />
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Meet the Competition")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  contentWrapper: {
    marginHorizontal: 16,
    flex: 1,
  },
  stepWrapper: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
  },
  stepHeader: {
    fontWeight: "bold",
    color: "#383838",
    fontSize: 24,
    marginLeft: 8,
  },
  stepText: {
    color: "#383838",
    fontSize: 18,
    paddingLeft: 8,
  },
  explanationText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
  text: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: "center",
  },
  nextButton: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#c01f29",
    borderRadius: 10,
    width: 100,
    height: 35,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
});

export default HowItWorksScreen;
