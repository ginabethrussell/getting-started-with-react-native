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

import popularApps from "../../assets/popularApps.png";
import BackButtonHeader from "../components/BackButtonHeader";
import { Ionicons } from "@expo/vector-icons";

const DefinitionScreen = ({ navigation }) => {
  return (
    <View style={styles.pageWrapper}>
      <BackButtonHeader
        title="What is React Native?"
        backgroundColor="#c01f29"
        color="#ffffff"
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View>
          <View style={styles.card}>
            <Text style={styles.text}>
              A JavaScript framework for writing natively rendering mobile
              applications
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Built with React - Facebook's JS Library for building user
              interfaces
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              While React targets the DOM, React Native targets Mobile Platforms
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Enables{" "}
              <Text style={{ fontWeight: "bold", color: "#c01f29" }}>ONE </Text>
              shared codebase for crossplatform apps!
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              A collection of special components that can be compiled to native
              widgets for Android and iOS
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Exposes JS interfaces for platform APIs so you can use native
              features like the user's camera and location
            </Text>
          </View>
          <View style={[styles.card, { borderBottomWidth: 0 }]}>
            <Text style={styles.text}>
              You may have already used React Native with one of your favorite
              apps!
            </Text>
          </View>
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
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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

export default DefinitionScreen;
