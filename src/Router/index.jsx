import React from 'react'
import { Home } from '../Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from '../Context/UserContext'
const Router = () => {
    return (
        <UserContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserContext>
    )
}

export default Router