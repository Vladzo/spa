import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div style={{margin: '10px'}}>
            Post id: {item.id}
            <div>Title: {item.title}</div>
            <div>Body: {item.body}</div>
            <Link to ={`/posts/comments/${item.id}`}><button>Show all comments</button></Link>
            <hr/>
        </div>
    );
}