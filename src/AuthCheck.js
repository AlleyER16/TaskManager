import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const AuthCheck = ({children}) => {

    const {access_token, user_logged} = useSelector(state => state.user);

    if(!access_token || !user_logged) return <Navigate to="/login" />

    return children;

}

export default AuthCheck;