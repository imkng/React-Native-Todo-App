import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxone}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingTop: 40,
        backgroundColor: "#ddd"
    },
    boxone: {
        flex: 2,
        backgroundColor: "violet",
        padding: 10
    },
    boxTwo: {
        flex: 1,
        backgroundColor: "skyblue",
        padding: 20
    },
    boxThree: {
        flex: 1,
        backgroundColor: "gold",
        padding: 30
    },
    boxFour: {
        flex: 1,
        backgroundColor: "green",
        padding: 40
    }
})
