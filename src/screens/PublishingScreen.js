import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Unorderedlist from "react-native-unordered-list";
import * as WebBrowser from "expo-web-browser";
const PublishingScreen = () => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenwrapper}
    >
      <Text style={styles.title}>Publishing Your App</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#383838",
          marginBottom: 20,
        }}
      >
        <LottieView
          ref={animation}
          loop={true}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/publish.json")}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.listHeader}>Deployment Steps Overview</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>Test & Polish Your Code</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>Configure Your App</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>Add Icons & Splash Screen</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>Build & Deploy</Text>
        </Unorderedlist>
      </View>
      <View>
        <Text style={styles.text}>
          Expo makes it easy to publish, build, and deploy Expo managed apps.
        </Text>
        <Text style={styles.text}>
          With Expo, configure your app using the app.json file.
        </Text>
        <Text style={styles.text}>
          Run expo publish to publish your app to Expo's servers. This generates
          a QR code you can share with test users.
        </Text>
        <Text style={styles.text}>
          Android users can test using the Expo Go app and iOS users can test
          once they are added as project members.
        </Text>
        <Text style={styles.text}>
          Next, run expo build:android or expo build:ios to create standalone
          builds for app store submission.
        </Text>
        <Text style={styles.text}>
          You will need to create your own Apple Developer and Google Play
          accounts for app store submissions.
        </Text>
        <Text style={styles.text}>
          Expo even provides Over the Air (OTA) updates to your app once it's
          published allowing you to make changes without requiring a new build,
          new app store submissions, and redownloads by your users.
        </Text>
      </View>
      <View>
        <Text style={styles.listHeader}>Configuring the app.json file</Text>
        <Text style={styles.text}>
          1. Set the name - This will be the name for Expo Go and the home page
          for your standalone build
        </Text>
        <Text style={styles.text}>
          2. Set the slug - This creates the slug for the app identifying URL on
          Expo's servers
        </Text>
        <Text style={styles.text}>
          3. Set the sdk version - This is typically the most recent version
        </Text>
        <Text style={styles.text}>
          4. Set the platforms - defaults to ["ios", "android"]
        </Text>
        <Text style={styles.text}>
          5. Set the version - this should update with each build
        </Text>
        <Text style={styles.text}>
          6. Set the orientation - can lock the orientation to portrait or
          landscape
        </Text>
        <Text style={styles.text}>
          7. Set the app icon - points to an assets file
        </Text>
        <Text style={styles.text}>
          8. Set the splash screen - creates the initial apploading screen
        </Text>
        <Text style={styles.text}>
          9. Set ios and android specific settings - includes buildNumber,
          versionCode, and any permissions for android
        </Text>
        <Text style={styles.text}>
          For a complete list of properties available, check out{" "}
          <Text
            style={styles.docslink}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://docs.expo.dev/versions/latest/config/app/"
              )
            }
          >
            Expo's guide
          </Text>{" "}
          to configuring the app.json file
        </Text>
      </View>
      <View>
        <Text style={styles.listHeader}>
          Publishing your app to Expo's servers
        </Text>
        <Text style={styles.text}>Run expo publish</Text>
        <Text style={styles.text}>
          This will build and publish your app to Expo.
        </Text>
        <Text style={styles.text}>
          When complete, Expo will return a shareable URL with a QR code to view
          and test your app
        </Text>
        <Text style={styles.text}>
          Once you've completed testing, move on to the next step
        </Text>
        <Text
          style={[styles.text, styles.docslink]}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://docs.expo.dev/workflow/publishing/"
            )
          }
        >
          More about Publishing ...
        </Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.listHeader}>Building Standalone Apps</Text>
        <Text style={styles.text}>
          Run expo build:android and/or expo build:ios{" "}
        </Text>
        <Text style={styles.text}>
          Follow the prompts to enter your account information and create any
          needed documentation from command line
        </Text>
        <Text style={styles.text}>
          Wait for the app to finish building - you can watch your build
          progress with the generated url and check the wait times using Expo's{" "}
          <Text
            style={styles.docslink}
            onPress={() =>
              WebBrowser.openBrowserAsync("https://expo.dev/turtle-status")
            }
          >
            Turtle status
          </Text>{" "}
          site
        </Text>
        <Text style={styles.text}>
          Test your app on your device or simulator
        </Text>
        <Text style={styles.text}>
          Submit your app to the appropriate store(s)
        </Text>
        <Text
          style={[styles.text, styles.docslink]}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://docs.expo.dev/distribution/app-stores/"
            )
          }
        >
          More about Deploying to App Stores ...
        </Text>
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
    fontSize: 18,
    marginVertical: 10,
    textTransform: "uppercase",
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

export default PublishingScreen;
