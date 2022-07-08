import React, { useState } from 'react'

const Login = ({ onHide, setpage }) => {
    const [hidePass, sethidePass] = useState(false)
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
                    <input type="text" className='form-control' placeholder='Введите ваш e-mail' />
                </div>
                <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="">Пароль <i className='far fa-info-circle'></i></label>
                        <a href="#forgotpassword" onClick={() => { setpage('forgotpassword') }}>Забыли пароль?</a>
                    </div>
                    <div className='input-password'>
                        <input type={`${hidePass ? "text" : "password"}`} className='form-control' placeholder='Введите пароль' />
                        <i onClick={() => { sethidePass(!hidePass) }} className={`icon fal fa-eye${hidePass ? "" : "-slash"}`}></i>
                    </div>
                </div>
                <div className="form-group">
                    <label className='rule' htmlFor="rule">
                        <input type="checkbox" name="" id="rule" />
                        <span className='light'>   Запомнить меня</span>
                    </label>

                </div>
                <div className="form-group">
                    <button className='btn btn-primary'>Зарегистрироваться</button>
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