import React from "react";
import './card.scss';

class Card extends React.Component{
    render(){
        const {text, icon } = this.props

        return(
            <div className={"card " + (text.split(" ")[3] == "Google" ? "card--red" : "card--blue")}>
                <div className="card__icon">{icon}</div>
                <div className="card__text">{text}</div>
            </div>
        )
    }
}

export default Card;