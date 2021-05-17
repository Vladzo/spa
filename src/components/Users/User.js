import './User.css';
import {Link} from "react-router-dom";

function User({user}) {

    return (
        <div style={{border: "1px solid blue", display: "inline-block"}}>
            <div>Id: {user.id} {user.first_name} {user.last_name} <Link to={{pathname: `/users/details`, state: user}}>Details</Link></div> <img src={user.avatar} alt="avatar"/>
        </div>
    );
};

export default User;
