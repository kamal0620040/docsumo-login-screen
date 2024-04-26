import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import './input.scss';

class Input extends React.Component {
    render(){
        const { inputType, title, placeholder, handleChange, hidePassword, value } = this.props;

        return(
            <div className="input">
                <p className="input__heading">{title}</p>
                {
                    inputType === 'password' ? (
                        <div className="input__container">
                            <span className="input__container__icon"><IoEyeOutline /></span>
                            <input className="input__box" value={value} type={hidePassword ? 'password' : 'text'} placeholder={placeholder} onChange={handleChange} />
                        </div>
                    ) : (
                        <input className="input__box" value={value} type={inputType} placeholder={placeholder} onChange={handleChange} />
                    )
                }
            </div>
        )
    }
}

export default Input;