import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from "./Register"

export default function index() {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Register />} />
            </Routes>
        </>
    )
}
