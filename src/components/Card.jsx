import './Card.css'

function Card({className, children}){
    
    const classes = "card "+className;
    // children will contain the wrapped elements
    return (<div className={classes}>{children}</div>);
}

export default Card;