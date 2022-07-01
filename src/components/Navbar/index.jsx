import React from "react";
import { Dropdown } from 'react-bootstrap'

function Navbar({ showModal }) {
    return (
        <div className="navbar-head">
            <div className="logo">
                <img src="./images/logo.svg" alt="ZNS" />
            </div>
            <div className="links-head">
                <a className="link" href=""> Функции </a>
                <a className="link" href=""> Контакты </a>
                <a className="link" href=""> Log in </a>
                <a className="btn link" onClick={showModal}> Register </a>
                <Dropdown>
                    <Dropdown.Toggle className="dropdownLang" id="dropdown-basic">
                        <span>Ru</span>
                        <i className="fal fa-angle-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> Ru </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> En </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="toggle-sidebar">
                    <i className="fal fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar