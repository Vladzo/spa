import {useEffect, useState} from "react";

export default function Comments({match: {params: {id}}}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(value => value.json())
            .then(value => setComments([...value]));
    }, [])
    return (
        <div>
            {
                comments.map(value => <div key={value.id}>
                    Email: {value.email}<p>{value.body}</p><hr/></div>)
            }
        </div>
    );
}