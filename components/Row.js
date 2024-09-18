import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Row({ item, selectedId, select, data, setData, toggleComplete }) {
    const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff'

    const remove = () => {
        const arrayWithoutRemoved = data.filter((item) => item.id !== selectedId)
        setData(arrayWithoutRemoved)
        select(null)
    }
    return (
        <Pressable
            style={[styles.row, { backgroundColor }]}
            onPress={() => toggleComplete(item.id)}  // Lyhyt painallus vaihtaa 'completed'-tilan
            onLongPress={() => select(item.id)}  // Pitkä painallus valitsee rivin
        >
            <Text
                style={[
                    styles.rowText,
                    { textDecorationLine: item.completed ? 'line-through' : 'none' } // tällä tulee viiva kivasti
                ]}
            >
                {item.name}
            </Text>
            {
                item.id === selectedId &&
                <Ionicons
                    name='trash'
                    size={24}
                    onPress={() => remove()}  // pitkään ku painetaan avaa roskiksen
                />
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowText: {
        fontSize: 16,
        padding: 4,
        margin: 4,
    }
})
