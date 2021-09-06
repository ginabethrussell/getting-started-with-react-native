import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Unorderedlist from "react-native-unordered-list";
import LottieView from "lottie-react-native";

const NavigationScreen = () => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenwrapper}
    >
      <Text style={styles.title}>Routing & Navigation</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#87CEFA",
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
          source={require("../../assets/planeNavigationAnimation.json")}
        />
      </View>
      <Text style={styles.citedtext}>
        Routing and navigation refers to the ability to organize your app into
        distinct screens, map screens to URLs, move between those screens, and
        display the appropriate platform-specific navigation-related user
        interface elements (eg: tabs, navigation bar, screen transition
        animations and gestures, drawers).
        <Text
          style={styles.docslink}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://docs.expo.dev/guides/routing-and-navigation/"
            )
          }
        >
          - Expo Docs
        </Text>
      </Text>

      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold" }}>React Navigation</Text> is the
        recommended library for Expo managed apps.
      </Text>
      <Text style={styles.text}>
        If you are familiar with React Router to provide routing for React
        single page applications, React Navigation provides a similar function
        in mobile apps.
      </Text>
      <Text style={styles.text}>
        React Navigation registers screens in navigators instead of registering
        routes with React Router.
      </Text>
      <Text style={styles.text}>
        Links and URLs used by React Router are replaced with a Navigation
        function and registered Screen names.
      </Text>
      <Text style={styles.listHeader}>Why Use React Navigation?</Text>
      <Unorderedlist style={styles.bulletItem}>
        <Text style={styles.bulletText}>Most popular</Text>
      </Unorderedlist>
      <Unorderedlist style={styles.bulletItem}>
        <Text style={styles.bulletText}>
          Maintained by Expo - guaranteed to work in your apps
        </Text>
      </Unorderedlist>
      <Unorderedlist style={styles.bulletItem}>
        <Text style={styles.bulletText}>Highly customizable</Text>
      </Unorderedlist>
      <Unorderedlist style={styles.bulletItem}>
        <Text style={styles.bulletText}>
          Supports common patterns - Drawers, Stacks, and Tabs
        </Text>
      </Unorderedlist>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
          marginHorizontal: 16,
          padding: 20,
          borderColor: "#c01f29",
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <LottieView
          ref={animation}
          loop={true}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/drawerNavigation.json")}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.listHeader}>Get Started with React Navigation</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Install React Navigation using the{" "}
            <Text
              style={styles.tutorialLink}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://reactnavigation.org/docs/getting-started/"
                )
              }
            >
              "Getting started" guide
            </Text>
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Complete the Fundamentals guides beginning with{" "}
            <Text
              style={styles.tutorialLink}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://reactnavigation.org/docs/hello-react-navigation/"
                )
              }
            >
              "Hello React Navigation"
            </Text>
          </Text>
        </Unorderedlist>
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
  citedtext: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#383838",
    marginVertical: 5,
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
    marginLeft: 10,
  },
  bulletItem: {
    marginVertical: 3,
    fontSize: 18,
    fontWeight: "bold",
  },
  bulletText: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 3,
  },
});

export default NavigationScreen;
