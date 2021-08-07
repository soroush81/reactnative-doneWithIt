import React from 'react'
import { StyleSheet, View } from 'react-native'
import defaultStyles from '../../config/styles'


const ListItemSeperator = () => {
    return (
        <View style={styles.seperator} />
    )
}
const styles = StyleSheet.create({
    seperator: { width: "100%", height: 1, backgroundColor: defaultStyles.colors.light }
})
export default ListItemSeperator
