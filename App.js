import React from "react";
import { View } from 'react-native'
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <WelcomeScreen />;
  //return <ViewImageScreen />;
  // return <View style={{ padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4" }} >
  //   <Card title='aaa' subTitle='100$' image={require("./app/assets/2.jpg")} />
  //   <Card title='bbb' subTitle='250$' image={require("./app/assets/1.jpg")} />
  // </View>
  // return <ListingDetailsScreen />
  return <MessagesScreen />

}
