import {useEffect, useState} from "react";
import OneUser from "./OneUser";

export default function Posts() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers([...value]));
    }, []);
    return (
        <div>
            {
                users.map((value, index) => <OneUser key = {index} item = {value}/>)
            }
        </div>
    );
}