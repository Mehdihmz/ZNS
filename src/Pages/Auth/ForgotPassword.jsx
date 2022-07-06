import React from 'react'

const ForgotPassword = ({ setpage, onHide }) => {

    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links" />
                <div className='action'>
                    <i onClick={onHide} className='far fa-times'></i>
                </div>
            </div>

            <div className="auth-body pt-0" style={{ marginTop: "-20px" }}>
                <h3 className='title'>Забыли пароль?</h3>
                <p>Введите почтовый ящик, указанный при регистрации и  мы пришлем вам инструкцию по восстановлению пароля</p>
                <div className="form-group">
                    <label htmlFor="">Введите адрес электронной почты</label>
                    <input type="text" className='form-control' placeholder='Введите ваш e-mail' />
                </div>

                <div className="form-group">
                    <button onClick={() => { setpage('successSendLink') }} className='btn btn-primary'>Зарегистрироваться</button>
                </div>
                <div className="text-center">

                    <a onClick={() => { setpage('login') }} href="#" style={{ textDecoration: "none" }}>
                        <i className='far fa-angle-left'></i>
                        <span className='mx-2'>Вернуться назад</span>
                    </a>

                </div>

            </div>

        </div>
    )
}

export default ForgotPassword