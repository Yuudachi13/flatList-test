import React from "react";
import { StyleSheet,TextInput,View } from "react-native";

export default function Search ({criteria, setCriteria})  {
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Search task"
            value={criteria}
            onChangeText={(text) => setCriteria(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
})