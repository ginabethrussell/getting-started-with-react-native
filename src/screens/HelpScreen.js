import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import * as WebBrowser from "expo-web-browser";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
const HelpScreen = () => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenwrapper}
    >
      <Text style={styles.title}>More Help with React Native Apps</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
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
          source={require("../../assets/help.json")}
        />
      </View>
      <View style={{ marginBottom: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons name="docs" size={24} color="#383838" />
          <Text style={styles.listHeader}>Documentation</Text>
        </View>
        <Text
          style={styles.linkText}
          onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.dev/")}
        >
          Expo
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://reactnative.dev/")
          }
        >
          React Native
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://reactnavigation.org/")
          }
        >
          React Navigation
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <MaterialIcons name="ondemand-video" size={24} color="#383838" />
          <Text style={styles.listHeader}>Tutorials</Text>
        </View>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.udemy.com/course/the-complete-react-native-and-redux-course/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-VMggzrV3Z5MnZFwqw6RVSA&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads"
            )
          }
        >
          The Complete React Native + Hooks Course (2021) on Udemy $$
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.edx.org/course/cs50s-mobile-app-development-with-react-native?source=aw&awc=6798_1631035523_91a9bc9ae4eeb1527a56db86659371ee&utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=631878_javarevisited"
            )
          }
        >
          CS50's Mobile App Development with React Native on edX free
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.udemy.com/course/build-full-stack-react-native-apps-with-expressjs-backend/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-LcrkLVfgjehZ3xmJZS_s9Q&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads"
            )
          }
        >
          Build Full-stack React Native Apps with Node.js Backend on Udemy $$
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.codecademy.com/learn/learn-react-native?utm_source=pepperjam&utm_medium=affiliate&utm_term=214453&clickId=3687893441&pj_creativeid=8-12462&pj_publisherid=214453"
            )
          }
        >
          Learn React Native on Codecademy free
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://learn.reactnativeschool.com/")
          }
        >
          React Native School free & $$
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <MaterialCommunityIcons
            name="newspaper-variant-outline"
            size={24}
            color="#383838"
          />
          <Text style={styles.listHeader}>Other Resources</Text>
        </View>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://reactnative.dev/blog/")
          }
        >
          Facebook's React Native Github Blog
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://twitter.com/reactnative")
          }
        >
          React Native Twitter
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://reactnativeradio.com/")
          }
        >
          React Native Radio
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://blog.reactnativecoach.com/")
          }
        >
          React Native Coach
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.newline.co/fullstack-react-native/"
            )
          }
        >
          FullStack React Native eBook
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <FontAwesome name="twitter-square" size={24} color="#383838" />
          <Text style={styles.listHeader}>People to Follow</Text>
        </View>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://www.raywenderlich.com/")
          }
        >
          Ray Wenderlich
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://twitter.com/dvnabbott")
          }
        >
          Devin Abbott
        </Text>

        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://twitter.com/dan_abramov?source=user_profile---------------------------"
            )
          }
        >
          Dan Abramov
        </Text>
        <Text
          style={styles.linkText}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://twitter.com/maxedapps")
          }
        >
          Maximilian Schwarzmuller
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
  listHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#383838",
    marginLeft: 8,
  },
  text: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 5,
  },
  linkText: {
    fontSize: 18,
    marginVertical: 10,
    color: "#383838",
  },
});

export default HelpScreen;
