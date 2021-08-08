import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Switch, ImagePickerIOS, Button, Image } from 'react-native'
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
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0])
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // const result =  await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION)
    // console.log(result)
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    console.log(`the value is ${granted}`)
    if (!granted) alert('you need to enable permission to access the library')
  }
  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled)
        setImageUri(result.uri)
    } catch (error) {
      console.log('failed to show image', error)      
    }
  }

  return (
    <Screen>
      <Button onPress={selectImage} title="select Image" />
      <Image source={{uri:imageUri}} style={{width:200, height:200}} />
    </Screen>
        )
  // return <WelcomeScreen />;
  //return <ViewImageScreen />;
  // return <View style={{ padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4" }} >
  //   <Card title='aaa' subTitle='100$' image={require("./app/assets/2.jpg")} />
  //   <Card title='bbb' subTitle='250$' image={require("./app/assets/1.jpg")} />
  // </View>
  // return <ListingDetailsScreen />
  // return <MessagesScreen />
 // return <ListEditingScreen />
  // return (
  //   <Screen>
  //     <AppTextInput icon="email" placeholder="UserName" />
  //     <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  //     <AppPicker icon="apps" placeholder="Categories" items={categories} selectedItem={category} onSelectItem={(item) => setCategory(item)} />
  //     <AppTextInput placeholder="email" icon="email" />
  //   </Screen>)

}
