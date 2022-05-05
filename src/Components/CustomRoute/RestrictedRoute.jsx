import React from 'react';
import { Navigate,Outlet,useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function RestrictedRoute() {  
    const currentUser = useSelector((state) => state.auth.currentUser);
    const location=useLocation();
    
  return (
      currentUser._id?
   ( <Navigate to={
location.state!==null? location?.state?.from?.pathName :"/homePage"} replace 
state={{from:location}} />)
:(<Outlet/>)  )
}
