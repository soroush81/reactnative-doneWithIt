import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import defaultStyles from '../../config/styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='trash-can' color={defaultStyles.colors.white} size={35} />
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default ListItemDeleteAction
