import './Character.css'
import {Link} from "react-router-dom";

export default function Character({user, url}) {

    return (
        <div className={'post-border'}>
            <div>{user.id}  {user.name.first ? user.name.first : 'User'}</div>
            <Link to={`${url}/details/${user.id}`}><button>Show more details</button></Link>
        </div>
    );
}