import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import expoLogo from "../../../assets/expo-logo.png";
import GooglePlayBadge from "../../../assets/google-play-badge.png";
import AppleStoreBadge from "../../../assets/appleAppStoreBadge.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import BackButtonHeader from "../../components/BackButtonHeader";
import { Ionicons } from "@expo/vector-icons";
const GettingStartedScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <BackButtonHeader
      title="Build Your First App"
      backgroundColor="#c01f29"
      color="#ffffff"
      navigation={navigation}
    />
    <ScrollView>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Getting Started with </Text>
        <Image style={styles.expoLogo} source={expoLogo} />
      </View>

      <View style={styles.infoWrapper}>
        <Text style={styles.titleText}>What is Expo? </Text>
        <Text style={styles.expoDefinition}>
          "Expo is a framework and a platform for universal React applications.
          It is a set of tools and services built around React Native and native
          platforms that help you develop, build, deploy, and quickly iterate on
          iOS, Android, and web apps from the same JavaScript/TypeScript
          codebase."{" "}
          <Text
            style={styles.docslink}
            onPress={() => Linking.openURL("https://docs.expo.dev/")}
          >
            - Expo Docs
          </Text>
        </Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.titleText}>
          Setting Up Your Development Environment - 2 Tools
        </Text>
        <Text style={styles.text}>1. Install the Expo CLI </Text>
        <Text style={styles.code}>npm install --global expo-cli</Text>
        <Text style={styles.text}>
          Verify installation and set up your account
        </Text>
        <Text style={styles.code}>expo whoami</Text>
        <Text style={styles.text}>2. Download the Expo Go Mobile App</Text>
        <View style={styles.badgeContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=host.exp.exponent"
              )
            }
          >
            <Image style={styles.googleBadge} source={GooglePlayBadge} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://apps.apple.com/us/app/expo-go/id982107779?itsct=apps_box_link&itscg=30200"
              )
            }
          >
            <Image style={styles.badge} source={AppleStoreBadge} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.titleText}>To Create Your First App: </Text>
        <Text style={styles.text}>Initialize a new project </Text>
        <Text style={styles.code}>expo init my-first-app</Text>
        <Text style={styles.text}>Navigate into your project directory</Text>
        <Text style={styles.code}>cd my-first-app</Text>
        <Text style={styles.text}>Start up the Expo server</Text>
        <Text style={styles.code}>expo start</Text>
        <Text style={styles.text}>
          Scan the QR code from your browser and view on your mobile device
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.dev/")}
        >
          <Text style={styles.helpText}>Expo Docs</Text>
        </TouchableOpacity>
        <SimpleLineIcons name="docs" size={24} color="white" />
      </View>
      <View style={styles.tutorialWrapper}>
        <Text style={styles.titleText}>
          Next Up - Choose Your Own Adventure
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome5 name="link" size={20} color="#c01f29" />
          <Text
            style={styles.linkText}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://docs.expo.dev/tutorial/planning/"
              )
            }
          >
            Expo Tutorial
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome5 name="link" size={20} color="#c01f29" />
          <Text
            style={styles.linkText}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://reactnative.dev/docs/tutorial"
              )
            }
          >
            React Native Tutorial
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome5 name="link" size={20} color="#c01f29" />
          <Text
            style={styles.linkText}
            onPress={() =>
              WebBrowser.openBrowserAsync("https://docs.expo.dev/")
            }
          >
            Expo Docs
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome5 name="link" size={20} color="#c01f29" />
          <Text
            style={styles.linkText}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://reactnative.dev/docs/getting-started"
              )
            }
          >
            React Native Docs
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <FontAwesome5 name="link" size={20} color="#c01f29" />
          <Text
            style={styles.linkText}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://medium.com/javarevisited/my-favorite-free-react-native-courses-for-beginners-in-2020-4629f5274eb6"
              )
            }
          >
            Free React Native Courses in 2021
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("How It Works")}
      >
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  expoLogo: {
    width: 100,
    height: 50,
  },
  headerText: {
    fontWeight: "bold",
    color: "#383838",
    fontSize: 22,
    marginVertical: 15,
  },
  titleText: {
    fontWeight: "bold",
    color: "#383838",
    fontSize: 20,
    marginBottom: 12,
  },
  infoWrapper: {
    marginVertical: 16,
    paddingHorizontal: 30,
  },
  expoDefinition: {
    fontSize: 18,
    color: "#383838",
    fontStyle: "italic",
  },
  docslink: {
    fontWeight: "bold",
    color: "#c01f29",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: "#383838",
  },
  code: {
    backgroundColor: "white",
    fontSize: 16,
    width: "auto",
    textAlign: "center",
    paddingVertical: 5,
    marginVertical: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  googleBadge: {
    height: 50,
    width: 130,
    resizeMode: "contain",
  },
  badge: {
    height: 60,
    width: 110,
    resizeMode: "contain",
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "50%",
    paddingVertical: 6,
    backgroundColor: "#c01f29",
    borderRadius: 10,
    shadowOpacity: 0.29,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 10,
  },
  helpText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
  },
  tutorialWrapper: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  linkText: {
    marginLeft: 8,
    fontSize: 18,
    marginBottom: 10,
    color: "#383838",
  },
  button: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#c01f29",
    borderRadius: 10,
    width: 135,
    height: 35,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
});

export default GettingStartedScreen;
