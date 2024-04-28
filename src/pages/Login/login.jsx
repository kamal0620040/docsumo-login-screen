import React from "react";
import './login.scss';
import {Input, Link, Card, Divider, Button} from '../../components';
import { FcGoogle } from "react-icons/fc";
import { mirosoft, logo } from "../../assets";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidePassword: true
        }
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    }

    togglePasswordVisibility(){
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    }

    render() {
        return (
             <div className="login">
                <div className="login__logo">
                    <img src={logo} width={180} />
                </div>

                <div className="login__container">
                        <div className="login__container__heading">
                            <h1>Login to your Docsumo account</h1>
                        </div>

                        <div className="login__container__cards">
                            <Card text="Sign in with Google" icon={<FcGoogle size={25} />} />
                            <Card text="Sign in with Microsoft" icon={<img src={mirosoft} height={25} />} />
                        </div>
                        
                        <div className="login__container__divider">
                            <Divider text="OR" />
                        </div>

                        <div className="login__container__inputs">
                            <Input inputType="email" title="Work Email" placeholder="janedoe@abc.com" handleChange={()=>{}} />
                            <Input inputType="password" title="Password" placeholder="Enter password here.." handleChange={()=>{}} hidePassword={this.state.hidePassword} togglePasswordVisibility={this.togglePasswordVisibility} />
                        </div>
                        
                        <div className="login__container__password">
                            <Link text="Forgot Password?" className='login__link' />
                        </div>
                        
                        <div className="login__container__button">
                            <Button btnName="Login" />
                        </div>

                        <div className="login__container__footer">
                            <Link text="Login with SSO?" isBold />
                            <div className="login__container__footer__signup">
                                <span>Don't have an account?</span>
                                <Link text="Sign Up" isBold />
                            </div>
                        </div>

                </div>
             </div>
        );
    }
}

export default Login;