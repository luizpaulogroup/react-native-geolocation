import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default function Uf({ navigation }) {

    const [ufs, setUfs] = useState([]);

    useEffect(() => { getUfs() }, []);

    const getUfs = async () => {

        try {

            const { data } = await api.get("/estados");

            setUfs(data);

        } catch (error) {
            console.log(error);
        }

    }

    const handleCities = id => navigation.navigate("City", { id });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={ufs}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleCities(item.id)}
                        style={{
                            alignSelf: "stretch"
                        }}
                    >
                        <Text>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

