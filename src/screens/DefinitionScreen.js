import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import reactNativeLogo from "../../assets/logo.png";
import popularApps from "../../assets/popularApps.png";
import BackButtonHeader from "../components/BackButtonHeader";
import { Ionicons } from "@expo/vector-icons";

const DefinitionScreen = ({ navigation }) => (
  <View style={styles.pageWrapper}>
    <BackButtonHeader
      title="What is React Native?"
      backgroundColor="#c01f29"
      color="#ffffff"
      navigation={navigation}
    />
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          height: 140,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={reactNativeLogo}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>
          A JavaScript framework for writing natively rendering mobile
          applications
        </Text>
        <Text style={styles.text}>
          Built with React - Facebook's JS Library for building user interfaces
        </Text>
        <Text style={styles.text}>Originated from an internal Hackathon</Text>
        <Text style={styles.text}>
          While React targets the DOM, React Native targets Mobile Platforms
        </Text>
        <Text style={styles.text}>
          Enables{" "}
          <Text style={{ fontWeight: "bold", color: "#c01f29" }}>ONE </Text>
          shared codebase for crossplatform apps!
        </Text>
        <Text style={styles.text}>
          A collection of special components that can be compiled to native
          widgets for Android and iOS
        </Text>
        <Text style={styles.text}>
          Exposes JS interfaces for platform APIs so you can use native features
          like the user's camera and location
        </Text>
        <Text style={styles.text}>
          You may have already used React Native with one of your favorite apps!
        </Text>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            height: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={popularApps}
            resizeMode="contain"
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("How It Works")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    alignItems: "center",
  },
  titleBar: {
    width: "100%",
    height: 60,
    backgroundColor: "#c01f29",
    color: "#383838",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#383838",
  },
  text: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 5,
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
});

export default DefinitionScreen;
