import {useEffect, useState} from "react";

export default function Comments({match: {params: {id}}}) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(value => value.json())
            .then(value => setComments([...value]));
    }, [])
    return (
        <div>
            {
                comments.map((value, index) => <div key={index}>
                    Email: {value.email}<p>{value.body}</p><hr/></div>)
            }
        </div>
    );
}