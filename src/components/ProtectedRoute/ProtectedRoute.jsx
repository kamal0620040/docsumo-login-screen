import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { bindActionCreators } from "redux";
import { setUser } from "../../actions";

class ProtectedRoute extends React.Component{
    constructor(props){
        super(props);
        this.runFunctionBeforeMount();
    }

    runFunctionBeforeMount() {
        this.props.actions.setUser();
    }
    
    // UNSAFE_componentWillMount(){
    //     this.props.actions.setUser();
    //     console.log("chalyo");
    // }

    render(){
        const {isLoggedIn, isLoginProcessing} = this.props;
        
        if(isLoginProcessing){
            return <div>Loading...</div>
        }else{
            // console.log("Second");
            // return <div>Not processing</div>
            // return isLoggedIn ? <Outlet /> : <Login />;
            return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setUser,
        }, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        isLoginProcessing: state.login.isLoginProcessing,
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute);