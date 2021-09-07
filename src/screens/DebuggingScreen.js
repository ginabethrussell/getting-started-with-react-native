import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import * as WebBrowser from "expo-web-browser";
import Unorderedlist from "react-native-unordered-list";

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
      <View>
        <Text style={styles.listHeader}>What to Debug - 3 Types of Errors</Text>
        <Text style={styles.text}>Error Messages/App Crashes</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>syntax errors</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>undefined values</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            unavoidable - ex. failing network requests
          </Text>
        </Unorderedlist>
        <Text style={styles.text}>Logical Errors</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>undesired/unexpected behavior</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            unexpected/unhandled user behavior
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            sequence of steps leads to errors
          </Text>
        </Unorderedlist>
        <Text style={styles.text}>UX/Styling Errors</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>unexpected/wrong styling</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            inconsistent results on different devices
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            layout doesn't work on certain devices/orientations
          </Text>
        </Unorderedlist>
      </View>
      <View>
        <Text style={styles.listHeader}>How to Debug</Text>
        <Text style={styles.text}>Use the red error messages</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            read the message and find the stacktrace location
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            correct the error, reload or restart the Expo server
          </Text>
        </Unorderedlist>
        <Text style={styles.text}>Log the code flow</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>add logs in the console</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            use the Chrome debugger setting breakpoints
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            enable the remote debugger with Debug JS Remotely from the device or
            emulator
          </Text>
        </Unorderedlist>
        <Text style={styles.text}>View the Element Inspector</Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>enable the Element inspector</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            click on any element to see styling applied
          </Text>
        </Unorderedlist>
      </View>
      <View>
        <Text style={styles.listHeader}>Using React Native Debugger</Text>
        <Text style={styles.text}>
          React Native Debugger is a standalone app for debugging React Native
          apps.
        </Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text
            style={styles.bulletText}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://github.com/jhen0409/react-native-debugger"
              )
            }
          >
            install the debugger - click for installation directions
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>start the debugger application</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            specify the port using Ctrl + T or Cmd + T and set to 19000
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>run your app with expo start</Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            select Debug Remote JS from the developer menu
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            the app should automatically connect
          </Text>
        </Unorderedlist>
        <Text style={styles.text}>
          The debugger will allow you to view the element tree, props, state,
          and children of any selected element
        </Text>
        <Text style={styles.text}>
          Right-click in the application window for additional shortcuts
        </Text>
        <Text style={styles.text}>
          Enable Network Inspect to inspect network traffic with developer
          tools, allows inspection of fetch and HTTP requests
        </Text>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={styles.docslink}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://docs.expo.dev/workflow/debugging/"
              )
            }
          >
            More about debugging ...
          </Text>
        </View>
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

export default DebuggingScreen;
