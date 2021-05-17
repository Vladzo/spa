export default function UserDetails({location: {state: user}}) {

    return (
        <div>
            <div>User Id: {user.id}</div>
            <div>User Email: {user.email}</div>
            <div>First Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
            <div><img src={user.avatar} alt="Avatar"/></div>
        </div>
    );
}