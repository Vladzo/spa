import './User.css';

function User(props) {
let {style, name, img} = props;

    return (
        <div style={style}>
            <h2>{name}</h2>
            <img
                src = {img}
                alt= {name}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem, consectetur consequuntur cum
                eaque earum facilis fugit impedit iusto neque nihil officiis recusandae reprehenderit, repudiandae rerum
                suscipit tenetur voluptatem?</p>
        </div>
    );
}

export default User;
