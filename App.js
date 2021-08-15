import React from "react";
import { Button, Text } from 'react-native'
import Screen from './app/components/Screen'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListEditingScreen from './app/screens/ListEditingScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails", { id: 1, title: "Hello" })} />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details : {route.params.id} </Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={({ route }) => ({ title: route.params.title })} />
    <Stack.Screen name="Details" component={ListingDetailsScreen} />
    <Stack.Screen name="Edit" component={ListEditingScreen} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer >)




}
