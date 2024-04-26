import React from "react";
import './link.scss';

class Link extends React.Component {
    render(){
        const { text, isBold } = this.props;

        return(
            <div className="link">
               {
                isBold ? <a className="link--bold" href="#">{text}</a> : <a className="link--normal" href="#">{text}</a>
               }
            </div>
        )
    }
}

export default Link;