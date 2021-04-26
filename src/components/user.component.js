import './user.style.css';

function UserComponent(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img
                src = {props.img}
                alt= {props.name}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem, consectetur consequuntur cum
                eaque earum facilis fugit impedit iusto neque nihil officiis recusandae reprehenderit, repudiandae rerum
                suscipit tenetur voluptatem?</p>
        </div>
    );
}

export default UserComponent;