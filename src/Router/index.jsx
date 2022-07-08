import React from 'react'
import { Home, SignUp, Login } from '../Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router