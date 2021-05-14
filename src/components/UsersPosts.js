import {useEffect, useState} from "react";
import Post from "./Post";

export default function UsersPosts({match: {params: {id}}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            {
                posts.map((value, index) => <Post key = {index} item={value}/>)
            }
        </div>
    );
}