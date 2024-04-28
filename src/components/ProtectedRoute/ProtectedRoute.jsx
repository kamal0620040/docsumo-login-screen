import React from "react";
import { Navigate, Outlet } from "react-router-dom";

class ProtectedRoute extends React.Component{
    render(){
        // Authentication logic here
        const isAuthenticated = false;

        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    }
}

export default ProtectedRoute;