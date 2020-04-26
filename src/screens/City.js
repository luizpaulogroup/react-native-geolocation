import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';

import api from '../services/api';

export default function City({ route }) {

    const { uf } = route.params;

    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);

    useEffect(() => { getCities() }, []);

    const getCities = async () => {

        try {

            const { data } = await api.get(`/estados/${uf.id}/municipios`);

            var list = [];

            data.map((item, key) => {

                list[key] = {
                    id: item.id,
                    nome: item.nome,
                    subtitle: `Micro região ${item.microrregiao.nome}`
                }

            });

            setCities(list);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }

    }

    if (loading) {
        return <ActivityIndicator style={{ alignSelf: "center", flex: 1 }} />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {cities.map(item => (
                    <ListItem
                        key={item.id}
                        title={item.nome}
                        subtitle={item.subtitle}
                        bottomDivider
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}