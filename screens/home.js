import React, { useState } from "react";
import {
    StyleSheet, View, Text, FlatList, TouchableOpacity, Modal,
    TouchableWithoutFeedback, Keyboard
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/card';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'PES 2020', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'FIFA 2020', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Resident Evil 3', rating: 4, body: 'lorem ipsum', key: '3' },
        { title: 'Far Cry 5', rating: 5, body: 'lorem ipsum', key: '4' }
    ])

    const [modalOpen, setModalOpen] = useState(false);
    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        })
        setModalOpen(false)
    }

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }
    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal visible={modalOpen} animationType='slide'>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </Modal>
            </TouchableWithoutFeedback>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flexDirection: 'space-between'
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 30,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,

    }
})
