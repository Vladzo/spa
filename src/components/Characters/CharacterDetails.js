import {useEffect, useState} from "react";
import {getCharacters} from "../../services/api.service";

export default function CharacterDetails({match}) {
    let [user, setUser] = useState(null);
    useEffect(() => {
        getCharacters().then(value => {
            let users = value.data;
            let item = users.find(val => val.id === Number(match.params.id)) || null;
            return setUser({...item});
        });
    }, []);

    return (
        <div>

                {user ? user.name.first + ' ' + user.name.last : 'User Details'}
                <div>Planet: {user ? user.homePlanet : "Undefined planet"}</div>
                <div><img src={user ? user.images.main : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} alt="User photo"/></div>

        </div>
    );
}