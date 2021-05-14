import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts([...value]));
    }, []);
    return (
        <div>
            {
                posts.map((value, index) => <Post key={index} item={value}/> )
            }
        </div>
    );
}