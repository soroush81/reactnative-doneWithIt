import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={30} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 35,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70
    }
})
export default NewListingButton;