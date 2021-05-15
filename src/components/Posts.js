import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts([...value]));
    }, []);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/> )
            }
        </div>
    );
}