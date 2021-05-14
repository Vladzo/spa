import {useEffect, useState} from 'react';
import Character from "./Character";
import './Characters.css'
import {getCharacters} from "../../services/api.service";

export default function Characters({match: {path}}) {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]));
    }, []);

    return (
        <div>
            {
                characters.map((value, index) => value.id && value.name ? <Character key = {index} user={value} url = {path}/> : null)
            }
        </div>
    );
}