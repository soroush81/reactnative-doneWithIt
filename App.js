import React, { useState } from "react";
import { View, Text, TextInput, Switch } from 'react-native'
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from './app/components/Icon'
import ListItem from './app/components/lists/ListItem'
import Screen from './app/components/Screen'
import LoginScreen from "./app/screens/LoginScreen";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/components/AppPicker";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListEditingScreen from "./app/screens/ListEditingScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0])


  // return <WelcomeScreen />;
  //return <ViewImageScreen />;
  // return <View style={{ padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4" }} >
  //   <Card title='aaa' subTitle='100$' image={require("./app/assets/2.jpg")} />
  //   <Card title='bbb' subTitle='250$' image={require("./app/assets/1.jpg")} />
  // </View>
  // return <ListingDetailsScreen />
  // return <MessagesScreen />
  return <ListEditingScreen />
  // return (
  //   <Screen>
  //     <AppTextInput icon="email" placeholder="UserName" />
  //     <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  //     <AppPicker icon="apps" placeholder="Categories" items={categories} selectedItem={category} onSelectItem={(item) => setCategory(item)} />
  //     <AppTextInput placeholder="email" icon="email" />
  //   </Screen>)

}
