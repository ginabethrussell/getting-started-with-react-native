import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Unorderedlist from "react-native-unordered-list";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const WelcomeScreen = ({ navigation }) => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <View style={styles.screenwrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Welcome to Awesome React Native</Text>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
            height: 140,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LottieView
            ref={animation}
            loop={false}
            style={{
              width: 200,
              height: 200,
            }}
            source={require("../../assets/296-react-logo.json")}
          />
        </View>
        <Text style={styles.listHeader}>Explore this section to learn: </Text>
        <View style={styles.optionswrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("What is React Native")}
          >
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>What is React Native?</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("How It Works")}>
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>How it Works</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Challenges and Competition")}
          >
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>Challenges & Competition</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Getting Started")}
          >
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>How to Build Your First App</Text>
            </Unorderedlist>
          </TouchableOpacity>
        </View>
        <Text style={styles.listHeader}>Already have some knowledge?</Text>
        <Text style={styles.listSubHeader}>
          {" "}
          Check out the tabs to learn more about:{" "}
        </Text>
        <View style={styles.optionswrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Navigation")}>
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>Navigation</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("State Management")}
          >
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>State Management</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Native Device Features")}
          >
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>
                Using Native Device Features
              </Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Debugging")}>
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>Debugging</Text>
            </Unorderedlist>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Publishing")}>
            <Unorderedlist style={styles.bulletItem}>
              <Text style={styles.bulletText}>and Publishing Your App</Text>
            </Unorderedlist>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("What is React Native")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
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
  optionswrapper: {
    marginVertical: 16,
    marginHorizontal: 20,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#383838",
    marginTop: 20,
    marginLeft: 10,
  },
  listSubHeader: {
    fontSize: 18,
    color: "#383838",
    marginTop: 5,
    marginLeft: 10,
  },
  nextButton: {
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 20,
    backgroundColor: "#c01f29",
    borderRadius: 10,
    width: 135,
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
  bulletItem: {
    marginVertical: 3,
    fontSize: 16,
    fontWeight: "bold",
  },
  bulletText: {
    fontSize: 16,
    color: "#383838",
    marginVertical: 3,
  },
});

export default WelcomeScreen;
