import React from "react";
import { View, Text } from 'react-native'
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import Screen from './app/components/Screen'
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  // return <WelcomeScreen />;
  //return <ViewImageScreen />;
  // return <View style={{ padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4" }} >
  //   <Card title='aaa' subTitle='100$' image={require("./app/assets/2.jpg")} />
  //   <Card title='bbb' subTitle='250$' image={require("./app/assets/1.jpg")} />
  // </View>
  // return <ListingDetailsScreen />
  return <ListingsScreen />
  // return (
  //   <Screen>
  //     <ListItem title="My Title" IconComponent={<Icon name="email" />} />
  //   </Screen>)

}
