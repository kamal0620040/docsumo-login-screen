import React from "react";
import './button.scss';
import Spinner from "../Spinner/Spinner";

class Button extends React.Component {
    render(){
        const {btnName, handleClick, showSpinner} = this.props;

        return(
            <button type="button" disabled={showSpinner} onClick={handleClick} className= {`button ${showSpinner && 'button--disabled'}`}>
                {showSpinner? <div className="button__spinner"><Spinner /><div>Logging in..</div></div> : btnName}
            </button>
        )
    }
}

export default Button;