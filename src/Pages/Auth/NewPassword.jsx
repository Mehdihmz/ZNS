import React from 'react'
import InputPassword from '../../components/InputPassword'

const NewPassword = ({ setpage, onHide }) => {
  return (
    <div className="auth">
      <div className="auth-header">
        <div className="links" />
        <div className='action'>
          <i onClick={onHide} className='far fa-times'></i>
        </div>
      </div>

      <div className="auth-body pt-0" style={{ marginTop: "-20px" }}>
        <h3 className='title'>Восстановление пароля</h3>
        <p>Придумайте новый и надежный пароль, <br /> который вы нигде не используете</p>


        <InputPassword label="Введите новый пароль" placeholder="Введите пароль" />
        <InputPassword label="Подтвердите пароль" placeholder="Введите пароль" />

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

export default NewPassword