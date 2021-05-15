import {useEffect, useState} from "react";
import Post from "./Post";

export default function UsersPosts({match: {params: {id}}}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post key = {value.id} item={value}/>)
            }
        </div>
    );
}