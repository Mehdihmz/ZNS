import React, { useState } from 'react'

const InputPassword = ({ tooltip, label, onChange = () => { }, placeholder }) => {
    const [level, setLevel] = useState(0)
    const [message, setmessage] = useState()
    const [capslock, setCapsLock] = useState(0)
    const [hidePass, sethidePass] = useState(false)
    const validatePassword = ({ target }) => {
        onChange(target.value)
        if (String(target.value).length >= 8) {
            setmessage('Надежный пароль');
            setLevel(3)
            if (String(target.value).length >= 12) {
                setLevel(4)
            }
        } else {
            if (String(target.value).length >= 4) {
                setLevel(2)
                setmessage('Слишком короткий пароль, добавьте еще символы');
            } else {
                setLevel(1)
                setmessage('Популярный пароль, его легко взломать');
            }
            if (String(target.value).length == 0) {
                setLevel(0);
                setmessage();
            }
        }
    }
    const onKeyDown = keyEvent => {
        if (keyEvent.getModifierState("CapsLock")) {
            setCapsLock(1)
        } else {
            setCapsLock(0)
        }
    };

    return (
        <div className="form-group">
            <label htmlFor="">{label} {tooltip ?
                <i className='far fa-info-circle'></i>
                : null}</label>
            <div className='input-password'>
                <input type={`${hidePass ? "text" : "password"}`} onChange={validatePassword} className='form-control' onKeyDown={onKeyDown} placeholder={placeholder} />
                <i onClick={() => { sethidePass(!hidePass) }} className={`icon fal fa-eye${hidePass ? "" : "-slash"}`}></i>
                {capslock ? <span>CAPS LOCK</span> : null}
            </div>
            <div className={`levels l-${level}`}>
                <div className={`level ${level >= '1' && "active"}`} />
                <div className={`level ${level >= '2' && "active"}`} />
                <div className={`level ${level >= '3' && "active"}`} />
                <div className={`level ${level >= '4' && "active"}`} />
            </div>
            <span className={`message l-${level}`}>{message}</span>
        </div>
    )
}

export default InputPassword