import {useEffect, useState} from "react";
import User from "./User";
import {Link} from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    function nextPage() {
        if (totalPages < id) {
            return;
        }
        setId(id+1);
    }
    function previousPage() {
        if (id===1) {
            return;
        }
        setId(id-1);
    }
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + id)
            .then(value => value.json())
            .then(value => {
                return setUsers([...value.data]); setTotalPages(value.total_pages);
            })
    }, [id]);

    return (
        <div>
            <div>
                <Link to={`/users`} style={{marginRight: '10px'}} onClick={previousPage}>Previous page</Link>
                <Link to={`/users`} onClick = {nextPage}>Next page</Link>
            </div>
            {
                users.map(value => <User key = {value.id} user = {value}/>)
            }
        </div>
    );
}