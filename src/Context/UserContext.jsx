import React, { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext();
const UserContext = ({ children }) => {

    let userData = localStorage.getItem('user');

    userData = JSON.parse(userData) || null;

    const [user, setuser] = useState(userData);
    const [params, setParams] = useState();


    useEffect(() => {
        const url_string = window.location.href
        const url = new URL(url_string);
        const uid = url.searchParams.get("uid");
        const token = url.searchParams.get("token");
        if (uid) {
            setParams({ ...params, uid: uid });
        }
        if (token) {
            setParams({ ...params, token: token });
        }
    }, [])


    const saveUser = (data) => {
        setuser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }


    const removeUser = () => {
        setuser(null);
        localStorage.removeItem('user');
    }

    return (
        <Context.Provider value={{
            user,
            saveUser,
            removeUser
        }}>{children}</Context.Provider>
    )
}
export const useUserContext = () => useContext(Context)
export default UserContext