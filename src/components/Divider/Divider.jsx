import React from "react";
import './divider.scss';

class Divider extends React.Component{
    render(){
        const {text} = this.props

        return(
            <div className="divider">{text}</div>
        )
    }
}

export default Divider;