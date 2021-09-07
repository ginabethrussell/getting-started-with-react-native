import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Unorderedlist from "react-native-unordered-list";
import LottieView from "lottie-react-native";

const StateManagementScreen = () => {
  let animation = React.createRef();

  React.useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screenwrapper}
    >
      <Text style={styles.title}>State Management</Text>
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
          source={require("../../assets/dataManagement.json")}
        />
      </View>
      <Text style={styles.text}>
        React Native uses the same React components, JavaScript code logic, and
        React and 3rd party packages to manage component and application state.
        You may use the same state management systems in React Native apps that
        you use in React web applications.
      </Text>
      <View>
        <Text style={styles.listHeader}>Using Props</Text>
        <Text style={styles.text}>
          For simple applications with few components and limited data to
          manage, React's built-in system for creating and passing state data
          through components with prop drilling may be all your application
          needs.
        </Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.text}>
            State variables are created in the highest level component that
            needs to know about the data
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.text}>
            State is passed to rendered components through props
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Updated state is passed through nested components allowing all
            updated values to be rerendered
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            State changing functions may be passed into nested components to
            "lift up" state if necessary
          </Text>
        </Unorderedlist>
        <Text
          style={styles.docslink}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://reactjs.org/docs/components-and-props.html"
            )
          }
        >
          More about State & Props ...
        </Text>
      </View>
      <View>
        <Text style={styles.listHeader}>Using React Context</Text>
        <Text style={styles.text}>
          When state management becomes a little more complex, React's built-in
          Context API may provide just what you need.
        </Text>
        <Text style={styles.text}>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.{" "}
        </Text>
        <Text style={styles.text}>
          Context lets you “broadcast” needed data, and functions to make
          changes to it, to all components below.
        </Text>
        <Text style={styles.text}>
          Common examples where using context might be simpler than the
          alternatives include managing the current user, theme, or a data
          cache.
        </Text>
        <Text style={styles.text}>
          Context is implemented with four main building blocks.
        </Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            A Context is created with React.createContext
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            A Context Provider is wrapped around all components which need
            access to the context state
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            A value object composed of state and state update functions is
            passed into the context provider
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Individual components can subscribe to the context as consumers
            using the React.useContext hook
          </Text>
        </Unorderedlist>
        <Text
          style={styles.docslink}
          onPress={() =>
            WebBrowser.openBrowserAsync("https://reactjs.org/docs/context.html")
          }
        >
          More about Context ...
        </Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.listHeader}>Using Redux</Text>
        <Text style={styles.text}>
          Redux is a popular 3rd party library for managing state in JavaScript
          applications.
        </Text>
        <Text style={styles.text}>
          Redux is used with React-Redux in React and React Native applications.
        </Text>
        <Text style={styles.text}>
          Redux is implemented with four main building blocks.
        </Text>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            A single, centralized state ( a global JS object that is not
            directly accessible or mutable)
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Reducer functions that contain the logic to change and update the
            global state
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Actions that can be dispatched to trigger a reducer function to run
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            Subscriptions to get data out of the global state (used inside React
            components)
          </Text>
        </Unorderedlist>
        <Text style={styles.bulletText}>
          Middleware may also be added with Redux-Thunk to support asynchronous
          actions
        </Text>
        <Text
          style={styles.docslink}
          onPress={() => WebBrowser.openBrowserAsync("https://redux.js.org/")}
        >
          More about Redux ...
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

export default StateManagementScreen;
