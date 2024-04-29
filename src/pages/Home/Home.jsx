import React from "react";
import './home.scss';
import { connect } from "react-redux";

class Home extends React.Component{
    render(){
        const {loginData} = this.props;

        return(
            <div className="home">
                <div>Welcome to Docsumo: {loginData?.full_name}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginData: state.login.loginData,
    };
}

export default connect(mapStateToProps)(Home);