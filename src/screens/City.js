import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import api from '../services/api';

export default function City({ route }) {

    const { id } = route.params;

    const [cities, setCities] = useState([]);

    useEffect(() => { getCities() }, []);

    const getCities = async () => {

        try {

            const { data } = await api.get(`/estados/${id}/municipios`);

            setCities(data);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={cities}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            alignSelf: "stretch"
                        }}
                    >
                        <Text>{item.nome}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}