import React from 'react';
import {useDispatch} from "react-redux";
import {Redirect} from 'react-router-dom'

import {setAuthenticated} from '../features/authenticated/authenticatedSlice';

const Logout = () => {
   
    const dispatch = useDispatch();

    console.log('Login fired...');

    dispatch(setAuthenticated(false));

    return (
        <Redirect to='/home' />
    );
}

export default Logout;
