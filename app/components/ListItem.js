import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'

const ListItem = ({ image, title, subTitle }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    )
}
const
    styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            // justifyContent: 'flex-start',
            // alignItems: 'center',

        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 35,
            marginRight: 10
        },
        subTitle: { color: colors.medium },
        title: { fontWeight: "500" }
    })
export default ListItem
