import React from "react";
import './information.scss';

class Information extends React.Component{
    render() {
        const {text, type} = this.props;

        return (
             <div className={`information ${type === 'validation-error' ? 'validationError' : ''}`}>{text}</div>
        );
    }
}

export default Information;