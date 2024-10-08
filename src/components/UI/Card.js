import './Card.css';

function Card(props){
    //card is the class name we want to give and the other takes the className when it is called in another component.
const classes='card '+ props.className;

return(
    //props.children allows us to make a component use just like any html tag(wrapper)
    <div className={classes}>{props.children}</div>
);

}

export default Card;