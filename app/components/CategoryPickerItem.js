import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import AppText from './AppText'
import Icon from './Icon'
import defaultStyles from '../config/styles'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                {item.icon && <Icon
                    name={item.icon.name}
                    size={80} IconColor={defaultStyles.colors.white}
                    backgroundColor={item.icon.backgroundColor} />}
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem
