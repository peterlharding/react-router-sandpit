import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
  
import {selectAuthenticated} from '../features/authenticated/authenticatedSlice';

const TopNav = () => {

    const {authenticated} = useSelector(selectAuthenticated);

    const topMenu = () => {
        if (authenticated) {
            return (
                <>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/one">One</NavLink></li>
                <li><NavLink to="/two">Two</NavLink></li>
                <li><NavLink to="/three">Three</NavLink></li>
                <li style={{float: "right"}}><NavLink to="/logout">Logout</NavLink></li>
                </>
            );
        } else {
            return (
                <>
                <li><NavLink to="/home">Home</NavLink></li>
                <li style={{float: "right"}}><NavLink to="/login">Login</NavLink></li>
                </>
            );  
        }
    }
    
    return  (
        <div className="text-wrapper" style={{textAlign: "left"}}>
            <ul className="header">
              {topMenu()}
            </ul>
        </div>
    );
}

export default TopNav;
