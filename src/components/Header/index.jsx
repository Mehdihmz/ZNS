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
                    Регистрируясь в ZNS, вы получаете продукт,<br />
                    помогающий вам организовать контакты из<br />
                    социальных сетей, почты и мессенджеров.
                </p>

                <div className="d-block d-lg-none cover2">
                    <img src="./images/interface.svg" style={{ maxWidth: "100%" }} alt="cover" />
                </div>

                <a href="/"> Бесплатная регистрация</a>

            </Col>
            <Col className="right" md={6} xl={8}>
                <img src="./images/cover.svg" alt="cover" />
            </Col>

        </div>
    )
}

export default Header