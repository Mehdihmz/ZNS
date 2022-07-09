import React, { useState } from 'react'
import { useLogin } from '../../Hook/Auth'
import { Spinner } from 'react-bootstrap'
const Login = ({ onHide, setpage }) => {
    const [hidePass, sethidePass] = useState(false)
    const { onChange, submitForm, loading } = useLogin();
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links">
                    <span onClick={() => { setpage('login') }} className='active'>Вход</span>
                    <span onClick={() => { setpage('signup') }} >Регистрация</span>
                </div>
                <div className='action'>
                    <i onClick={onHide} className='far fa-times'></i>
                </div>
            </div>

            <div className="auth-body">
                <h3 className='title'>Войти в аккаунт</h3>

                <div className="form-group">
                    <label htmlFor="">Введите адрес электронной почты</label>
                    <input type="email" onChange={onChange} name="email" className='form-control' placeholder='Введите ваш e-mail' />
                </div>
                <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="">Пароль <i className='far fa-info-circle'></i></label>
                        <a   onClick={() => { setpage('forgotpassword') }}>Забыли пароль?</a>
                    </div>
                    <div className='input-password'>
                        <input type={`${hidePass ? "text" : "password"}`} onChange={onChange} name="password" className='form-control' placeholder='Введите пароль' />
                        <i onClick={() => { sethidePass(!hidePass) }} className={`icon fal fa-eye${hidePass ? "" : "-slash"}`}></i>
                    </div>
                </div>
                <div className="form-group">
                    <label className='rememberme' htmlFor="rememberme">
                        <input type="checkbox" name="rememberme" onChange={onChange} id="rememberme" />
                        <span className='light'>Запомнить меня</span>
                    </label>

                </div>
                <div className="form-group">
                    <button className='btn btn-primary' disabled={loading} onClick={submitForm}>{loading ? <Spinner size="sm" animation="border" /> : "Войти"}</button>
                </div>


            </div>

            <div className="auth-footer">
                <div className="title">
                    <span className="line" />
                    <span className='text'>
                        или войти через
                    </span>
                    <span className="line" />
                </div>
                <div className="icons">
                    <a href="">
                        <img src="/images/google.svg" alt="google" className="icon google" />
                    </a>

                    <a href="">
                        <img src="/images/link.svg" alt="linkedin" className="icon" />
                    </a>

                    <a href="">
                        <img src="/images/face.svg" alt="facebook" className="icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Login