import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

import api from '../services/api';

export default function Uf({ navigation }) {

    const [ufs, setUfs] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState("");

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
            setSearch(list);

        } catch (error) {
            console.log(error);
        }

    }

    const handleCities = uf => navigation.navigate("City", { uf });

    const handleFilter = textFilter => {

        setFilter(textFilter);

        const newList = search.filter(({ nome }) => nome.toLowerCase().indexOf(textFilter.toLowerCase()) > -1);

        setSearch(newList);

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SearchBar
                placeholder="Pesquisar..."
                lightTheme
                placeholderTextColor="#000"
                inputStyle={{
                    color: "#000"
                }}
                onChangeText={handleFilter}
                onClear={() => setSearch(ufs)}
                value={filter}
            />
            <ScrollView>
                {search.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleCities(item)}
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

