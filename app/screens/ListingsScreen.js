import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
const ListingsScreen = () => {
    const listings = [
        {
            id: 1,
            title: 'Red  Jacket for sale',
            price: 100,
            image: require('../assets/1.jpg')
        },
        {
            id: 2,
            title: 'couch in great condition',
            price: 1000,
            image: require('../assets/2.jpg')
        }
    ]
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card title={item.title} subTitle={"$" + item.price} image={item.image} />
                )
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: colors.light,

    }
})

export default ListingsScreen