import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey, Is this item still available?",
    image: require("../assets/1.jpg"),
  },
  {
    id: 2,
    title: "Soodeh Ebrahimi",
    description:
      "I'm interested in this item, when will you be able to post it?",
    image: require("../assets/2.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = (item) => {
    console.log("message selected", item);
  };

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            chevron
            image={item.image}
            onPress={() => handlePress(item)}
            subTitle={item.description}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            title={item.title}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/2.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
