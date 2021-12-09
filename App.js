
import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import HomeStack from "./src/components/partials/Navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from "src/theme";


const STATUSBAR_HEIGHT = StatusBar.currentHeight;


const App = () => {

 
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );


  return (
    <Provider store={store}>
      <MyStatusBar backgroundColor={Colors.PRIMARY_DARK} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer fallback={<Text>Loading...</Text>}>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
})