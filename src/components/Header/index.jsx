import React from 'react'
import { Col } from 'react-bootstrap'
function Header() {
    return (
        <div className="header">
            <span className="layer-top"></span>
            <span className="layer-right"></span>
            <span className="layer-center"></span>
            <span className="layer-left-bottom"></span>
            <Col className="left" md={5} xl={4}>
                <h2>
                    Управляйте своими контактами вместе <br /> с ZNS
                </h2>
                <p>
                    Регистрируясь в ZNS, вы получаете продукт,
                    помогающий вам организовать контакты из
                    социальных сетей, почты и мессенджеров.
                </p>
                <a href="/"> Бесплатная регистрация</a>
            </Col>
            <Col className="right" md={6} xl={8}>
                <img src="./images/cover.svg" alt="cover" />
            </Col>

        </div>
    )
}

export default Header