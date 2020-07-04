import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'PES 2020', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'FIFA 2020', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Resident Evil 3', rating: 4, body: 'lorem ipsum', key: '3' },
        { title: 'Far Cry 5', rating: 5, body: 'lorem ipsum', key: '4' }
    ])

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
