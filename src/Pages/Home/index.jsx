import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar, Header } from '../../components'
import ModalAuth from "./Components/ModalAuth";
function Home() {

    const [showAuth, setshowAuth] = useState(false)

    return (
        <Fragment>
            <ModalAuth show={showAuth} page={showAuth} onHide={() => { setshowAuth(false) }} />
            <header className="head-page">
                <Navbar showModal={(page) => { setshowAuth(page) }} />
                <Header />
            </header>
            <section className="section-one">
                <Container>
                    <div className="text-center">
                        <div className="wraper">
                            <h3> ZNS - что это? </h3>
                            <p> Мы создали удобную платформу
                                для вашей работы с контактами,
                                задачами и планами. Воплотили в
                                реальность .....................
                                ............
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex mt-5">
                        <Col lg={3} className="left order-lg-1 order-2">
                            <h4>Все ваши контакты. <br />
                                Из всех социальных сетей. <br />
                                В ZNS
                            </h4>
                            <p>
                                Объединяйте все ваши контакты из <br />
                                социальных сетей, мессенджеров и <br />
                                почты в одном удобном приложении.
                            </p>
                        </Col>
                        <Col lg={8} className="right order-lg-2 order-1">
                            <Row>
                                {/* {users.map(
                                    (user, i) => {
                                        
                                        return (
                                            <Col key={i} xs={3} className="box-img">
                                                <img className="icon" src="./images/WhatsApp.svg" alt="image" />
                                            </Col>
                                        )
                                    }
                                )} */}
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/WhatsApp.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user1.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/LinkedIN.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user3.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user2.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Telegram.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user4.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/INST.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Skype.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user5.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Outlook.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img src="./images/user6.jfif" alt="image" />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </section>
            <section className="section-tow">
                <img src="./images/map.svg" className="map" alt="" />
                <div className="description">
                    <h4>Найдите нужного человека, <br />
                        даже если забыли его имя.
                    </h4>
                    <p>Просто введите место или время когда
                        контакт был <br /> записан и ZNS найдет его.
                    </p>
                    <a href="" className="btn-active">Бесплатная регистрация</a>
                </div>
            </section>
            <section className="section-three">
                <Container>
                    <div className="title text-center">
                        <h3>Вместе с ZNS Вы сможете:</h3>
                    </div>
                    <Splide options={{
                        pagination: false,
                        arrows: false,
                        perPage: 4,
                        breakpoints: {
                            700: {
                                perPage: 1,
                            },
                            900: {
                                perPage: 2,
                            },
                            1024: {
                                perPage: 3,
                            }
                        }
                    }}>
                        <SplideSlide>
                            <div className="card-info">
                                <div className="layer-light light-5"></div>
                                <div className="layer-light light-6"></div>
                                <div className="content">
                                    <h5 className="title">Легко найти нужного вам человека</h5>
                                    <p className="description">Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card-info">
                                <div className="layer-light light-3"></div>
                                <div className="layer-light light-4"></div>
                                <div className="content">
                                    <h5 className="title">Легко найти нужного вам человека</h5>
                                    <p className="description">Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card-info">
                                <div className="layer-light light-2"></div>
                                <div className="content">
                                    <h5 className="title">Легко найти нужного вам человека</h5>
                                    <p className="description">Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</p>
                                </div>

                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="card-info">
                                <div className="layer-light light-1"></div>
                                <div className="content">
                                    <h5 className="title">Легко найти нужного вам человека</h5>
                                    <p className="description">Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское</p>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>

                </Container>



            </section>

            <section className="section-four">
                <Container>
                    <Row className="justify-content-around">
                        <Col lg={4} className="phones text-center">
                            <img src="./images/Iphone.svg" alt="" />
                            <div className="layer-light" />
                        </Col>
                        <Col lg={4} className="descriptions">
                            <h2>Скачай приложение ZNS на iOS или Android </h2>
                            <p>Скачайте ZNS и присоединяйтесь к десяткам <br /> миллионов пользователей. Оцените удобный сервис <br /> общения, поиска контактов и планирования своих <br /> задач.</p>
                            <div className="links">
                                <a href="/"><img src="./images/AppleAppStore.svg" alt="" /></a>
                                <a href="/"><img src="./images/googleplay.svg" alt="" /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )

}
export default Home