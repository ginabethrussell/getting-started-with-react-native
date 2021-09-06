import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import BackButtonHeader from "../../components/BackButtonHeader";
import { Ionicons } from "@expo/vector-icons";
import Ionic from "../../../assets/ionic.png";
import Flutter from "../../../assets/flutter.png";
import Android from "../../../assets/android.png";
import Swift from "../../../assets/swift.png";
import Unorderedlist from "react-native-unordered-list";

const ComparisonScreen = ({ navigation }) => (
  <View style={styles.pageWrapper}>
    <BackButtonHeader
      title="Challenges & Competition"
      backgroundColor="#c01f29"
      color="#ffffff"
      navigation={navigation}
    />
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={styles.card}>
        <Text style={styles.titleText}>
          Learn once, write anywhere NOT Write once, use anywhere
        </Text>
        <Text style={styles.text}>
          Essential to write flexible code that can easily adapt to platforms,
          sizes, and orientations
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleText}>
          React Native is a Fast-Moving Target
        </Text>
        <Text style={styles.text}>
          New versions every month, breaking changes happen
        </Text>
        <Text style={styles.text}>Requires frequent maintenance</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleText}>
          Simple, Limited, Built-in Primitives
        </Text>
        <Text style={styles.text}>
          High dependency on 3rd party packages and the React Native Community -
          Expo, React Navigation
        </Text>
      </View>
      <View style={styles.competition}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image source={Swift} style={styles.logo} />
          <Image source={Android} style={styles.logo} />
        </View>
        <Text style={styles.competitionTitle}>Native Apps</Text>
        <Unorderedlist>
          <Text style={styles.competitionText}>Popular, widely used</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Seamless connection to Native APIs
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Learning curve for two languages
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            More expensive to develop two independent apps
          </Text>
        </Unorderedlist>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image source={Flutter} style={styles.logo} />
        </View>
        <Text style={styles.competitionTitle}>Flutter</Text>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Performant - compiled directly to device pixels with C/C++
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Google supported wih an extensive library of prestyled widgets using
            Material UI
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Less common, smaller community
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>Written in Dart</Text>
        </Unorderedlist>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image source={Ionic} style={styles.logo} />
        </View>
        <Text style={styles.competitionTitle}>Ionic</Text>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Easy and inexpensive to develop, uses HTML, CSS, and JavaScript
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>Huge Web community support</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Less performant - entire web app is wrapped in a webview
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.competitionText}>
            Interface with device more web than native-like
          </Text>
        </Unorderedlist>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("How It Works")}
        >
          <Ionicons name="arrow-back-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Getting Started")}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  card: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 18,
    color: "#383838",
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 16,
  },
  text: {
    fontSize: 18,
    color: "#383838",
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: "flex-start",
  },
  competition: {
    paddingHorizontal: 20,
  },
  competitionTitle: {
    fontSize: 18,
    color: "#383838",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  competitionText: {
    fontSize: 16,
    color: "#383838",
    marginBottom: 4,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    alignSelf: "flex-end",
    marginTop: 20,
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
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
});

export default ComparisonScreen;
