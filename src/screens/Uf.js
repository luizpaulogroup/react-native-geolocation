import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {

    useEffect(() => { getProfileGithub() }, []);

    const getProfileGithub = async () => {

        try {

            const response = await axios.get("https://api.github.com/users/devsgroupe");

            console.log(response);

        } catch (error) {
            console.log(error);
        }

    }

    return null;
}

