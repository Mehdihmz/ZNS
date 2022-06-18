import React from "react";
import { Dropdown } from 'react-bootstrap'

function Navbar() {
    return (
        <div className="navbar-head">
            <div className="logo">
                <img src="/public/images/logo.svg" alt="" />
            </div>
            <div className="links-head">
                <a className="link" href=""> Функции </a>
                <a className="link" href=""> Контакты </a>
                <a className="link" href=""> Вход </a>
                <a className="link" href=""> Регистрация </a>
                <Dropdown>
                    <Dropdown.Toggle className="dropdownLang" id="">
                        <i className="fal fa-angle-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href=""> Ru </Dropdown.Item>
                        <Dropdown.Item href=""> En </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navbar