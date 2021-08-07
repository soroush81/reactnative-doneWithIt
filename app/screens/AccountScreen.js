import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/lists/ListItem'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeperator from '../components/lists/ListItemSeperator'


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "message",
            backgroundColor: colors.secondary
        }
    }
]
const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="soodeh ebrahimi" subTitle="sebrahimi60@yahoo.com" size={35} image={require("../assets/2.jpg")} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    size={50} IconColor={colors.white}
                                    backgroundColor={item.icon.backgroundColor} />}
                        />
                    )} />
            </View>
            <ListItem title="Log Out" size={35} IconComponent={<Icon name="logout" size={50} IconColor={colors.white} backgroundColor="#ffe66d" />} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen
