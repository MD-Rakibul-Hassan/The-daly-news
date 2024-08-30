
import React from 'react'
import { useAuthContext } from '../Hooks/useAuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loader } = useAuthContext();
    const location = useLocation();
    if (loader) {
        return <span className="loading loading-spinner flex justify-center items-center w-9 text-warning"></span>;
    }

    if (user) {
     return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
}

export default Private