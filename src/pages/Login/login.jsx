import React from "react";
import './login.scss';
import {Input, Link, Card, Divider, Button, Information} from '../../components';
import { FcGoogle } from "react-icons/fc";
import { mirosoft, logo } from "../../assets";
import { validateEmail } from "../../utils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser, startValidator } from "../../actions";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidePassword: true,
            inputDetail: {
                email: '',
                password: ''
            },
            validationMessage: {
                email: '',
                password: ''
            }
        }
        this.runFunctionBeforeMount();
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    runFunctionBeforeMount() {
        this.props.actions.setUser();
    }

    togglePasswordVisibility(){
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    }

    handleValidation(attribute, value){
        if(attribute === 'email') {
            if(validateEmail(value)){
                this.setState({ validationMessage: { ...this.state.validationMessage, email: '' }});
            } else {
                this.setState({ validationMessage: { ...this.state.validationMessage, email: 'Please enter a valid email address'}});
            }
        } else if(attribute === 'password'){
            if(value.length > 0){
                this.setState({ validationMessage: { ...this.state.validationMessage, password: '' }});
            }
        }
    }

    loginHandler(){
        if(this.state.inputDetail.email === '' && this.state.inputDetail.password === ''){
            this.setState({ validationMessage: { email: 'Please enter a valid email address', password: 'Please enter a password'}});
        } else if(this.state.inputDetail.email === ''){
            this.setState({ validationMessage: { ...this.state.validationMessage ,email: 'Please enter a valid email address'}});
        } else if(this.state.inputDetail.password === ''){
            this.setState({ validationMessage: { ...this.state.validationMessage ,password: 'Please enter a password'}});
        } else{
            if(this.state.validationMessage.email === '' && this.state.validationMessage.password === ''){
                console.log('Proceed to login.');
                this.props.actions.startValidator(this.state.inputDetail);
                console.log(this.props.isProcessing);
                console.log(this.props.isValidated);
            }
        }
    }

    render() {
        return (
             <div className="login">
                <div className="login__logo">
                    <img src={logo} width={180} />
                </div>

                <div className="login__container">
                        <div className="login__heading">
                            <h1>Login to your Docsumo account</h1>
                        </div>

                        <div className="login__cards">
                            <Card text="Sign in with Google" icon={<FcGoogle size={25} />} />
                            <Card text="Sign in with Microsoft" icon={<img src={mirosoft} height={25} />} />
                        </div>
                        
                        <div className="login__divider">
                            <Divider text="OR" />
                        </div>

                        <div className="login__inputs">
                            <Input inputType="email" value={this.state.inputDetail.email} title="Work Email" placeholder="janedoe@abc.com" handleChange={(e)=>{ this.setState({ inputDetail: {...this.state.inputDetail, email: e.target.value}}); this.handleValidation('email', e.target.value);}} validationMessage={this.state.validationMessage.email} />
                            {this.state.validationMessage.email !== '' && <Information text={this.state.validationMessage.email} type="validation-error" />}
                            <Input inputType="password" value={this.state.inputDetail.password} title="Password" placeholder="Enter password here.." handleChange={(e)=>{this.setState({ inputDetail: {...this.state.inputDetail, password: e.target.value}}); this.handleValidation('password', e.target.value);}} hidePassword={this.state.hidePassword} validationMessage={this.state.validationMessage.password} togglePasswordVisibility={this.togglePasswordVisibility} />
                            {this.state.validationMessage.password !== '' && <Information text={this.state.validationMessage.password} type="validation-error" />}
                        </div>
                        
                        <div className="login__password">
                            <Link text="Forgot Password?" className='login__link' />
                        </div>
                        
                        <div className="login__button">
                            <Button btnName="Login" handleClick={this.loginHandler} />
                            {/* {this.props.isProcessing ? "Processing" : ""}
                            {this.props.isValidated ? "Validated" : ""}
                            {this.props.isLoginProcessing ? "Login Processing" : ""}
                            {this.props.isLoggedIn ? "Logged In" : ""} */}
                            {this.props.isLoggedIn && <Navigate to='/' replace={true}/>}
                        </div>

                        <div className="login__footer">
                            <Link text="Login with SSO?" isBold />
                            <div className="login__signup">
                                <span>{"Don't have an account?"}</span>
                                <Link text="Sign Up" isBold />
                            </div>
                        </div>

                </div>
             </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            startValidator,
            setUser,
        }, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        isProcessing: state.loginValidator.isProcessing,
        isValidated: state.loginValidator.isValidated,
        validationData: state.loginValidator.validationData,
        
        isLoginProcessing: state.login.isLoginProcessing,
        loginData: state.login.loginData,
        isLoggedIn: state.login.isLoggedIn,
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);