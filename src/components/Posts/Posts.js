import {useEffect, useState} from 'react';
import Post from "./Post";
import './Posts.css'
import {getPosts} from "../../services/api.service";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let turn = localStorage.getItem('singlePost') ? JSON.parse(localStorage.getItem('singlePost')) : null;
    let [singlePost, setSinglePost] = useState(turn);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    const findSinglePost = (id) => {
        let post = posts.find(value => value.id === id);
        setSinglePost(post);
        localStorage.setItem('singlePost', JSON.stringify(post));
    }
    return (
        <div className={'wrapper'}>
            <div className={'wrapper-item'}>
                {
                    posts.map((value, index) => <Post key = {index} value={value} findSinglePost = {findSinglePost}/>)
                }
            </div>
            <div className={'wrapper-item'}>
                {
                    singlePost && <div>
                        <h4>User id: {singlePost.userId}</h4>
                        <h4>Post id: {singlePost.id}</h4>
                        <p>Title: {singlePost.title}</p>
                        <p>Body: {singlePost.body}</p>
                    </div>
                }
            </div>
        </div>
    );
}