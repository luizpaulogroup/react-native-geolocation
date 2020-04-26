import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import api from '../services/api';

export default function Uf({ navigation }) {

    const [ufs, setUfs] = useState([]);

    useEffect(() => { getUfs() }, []);

    const getUfs = async () => {

        try {

            const { data } = await api.get("/estados");

            var list = [];

            data.map((item, key) => {

                list[key] = {
                    id: item.id,
                    nome: item.nome,
                    subtitle: `Região ${item.regiao.nome}`
                }

            });

            setUfs(list);

        } catch (error) {
            console.log(error);
        }

    }

    const handleCities = id => navigation.navigate("City", { id });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {ufs.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleCities(item.id)}
                        style={{ alignSelf: "stretch" }}
                    >
                        <ListItem
                            title={item.nome}
                            subtitle={item.subtitle}
                            bottomDivider
                            chevron
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

