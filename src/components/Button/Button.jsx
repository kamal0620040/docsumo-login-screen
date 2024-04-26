import React from "react";
import './button.scss';

class Button extends React.Component {
    render(){
        const {btnName, handleClick} = this.props;

        return(
            <button type="button" onClick={handleClick} className="button">{btnName}</button>
        )
    }
}

export default Button;