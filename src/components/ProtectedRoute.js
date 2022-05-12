import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({auth}) => {
    return auth ? <Outlet/> : <Navigate to="/home" />
}

export default ProtectedRoute;