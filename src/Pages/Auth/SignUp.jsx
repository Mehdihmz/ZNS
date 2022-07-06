import React, { useState } from 'react'
import InputPassword from '../../components/InputPassword'
import { useRequest } from '../../Hook/Request';

function SignUp({ onHide, setpage }) {

    const [form, setform] = useState({ email: "", password: "", re_password: "" });
    const { Request } = useRequest();

    const submitForm = () => {
        Request({ url: "auth/users", form }).then((resposen) => {
            if (resposen.status) {
                setpage('successSendLink')
            }
        })
    }
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links">
                    <span onClick={() => { setpage('login') }} >Вход</span>
                    <span onClick={() => { setpage('signup') }} className='active' >Регистрация</span>
                </div>
                <div className='action'>
                    <i onClick={onHide} className='far fa-times'></i>
                </div>
            </div>

            <div className="auth-body">
                <h3 className='title'>Создать аккаунт</h3>

                <div className="form-group">
                    <label htmlFor="">Введите адрес электронной почты</label>
                    <input type="email" onChange={({ target: { value } }) => setform({ ...form, email: value })} className='form-control' placeholder='Введите ваш e-mail' />
                </div>
                <InputPassword label="Пароль" tooltip onChange={(value) => { setform({ ...form, password: value, re_password: value }) }} placeholder="Введите пароль" />

                <div className="form-group">
                    <button onClick={submitForm} className='btn btn-primary'>Зарегистрироваться</button>
                </div>

                <div className="form-group">
                    <label className='rule' htmlFor="rule">
                        <input type="checkbox" name="" id="rule" />
                        <span>
                            Подтверждаю, что ознакомлен, полностью согласен и принимаю условия <a href="">Пользовательского соглашения</a>
                        </span>
                    </label>

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

export default SignUp