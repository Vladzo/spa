import {Link} from "react-router-dom";

export default function OneUser({item}) {
    return (
        <div>
                id: {item.id}; Name: "{item.name}"; <Link to={`/posts/user/${item.id}`}><button>Show users posts</button></Link>
        </div>
    );
}