import React, { useState } from 'react'
import { useRequest } from '../../Hook/Request'

function SignUp({ onHide }) {

    const [form, setform] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const { Request } = useRequest();
    const handler = () => {
        setLoading(true)
        Request({
            url: "register",
            form: form,
        }).then((response) => {
            setLoading(false)
            if (response.status) {
                localStorage.setItem('user', JSON.stringify(response.result))
                alert(response.result.message)

            } else {
                alert(response.result.message)
            }
        })
    }
    return (
        <div className="page-auth">
            <div className="close">
                <i onClick={onHide} className="fas fa-times"></i>
            </div>
            <div><input type="email" onChange={({ target }) => { setform({ ...form, email: target.value }) }} /></div>
            <div><input type="password" onChange={({ target }) => { setform({ ...form, password: target.value }) }} /></div>
            <div><button type="button" disabled={loading} onClick={handler} >{loading ? "Loading..." : "sign up"}</button></div>
        </div>
        
    )
}

export default SignUp
