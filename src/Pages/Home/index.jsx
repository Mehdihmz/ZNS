import React , { Fragment } from "react";
import { Col , Container , Row} from 'react-bootstrap'
import { Navbar ,Header } from '../../components'
function Home() {
    return (
        <Fragment>
            <header  className="head-page">
                <div className="px-4 container-lg">
                    <Navbar />
                </div>
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
                    <p>Просто введите место или время когда<br />
                     контакт был записан и ZNS найдет его.
                     </p>
                </div>
            </section>
            <section className="section-three">
                <Container>
                    <div className="title text-center">
                        <h3>Вместе с ZNS Вы сможете:</h3>
                    </div>
                    <Row className="just-web-flex justify-content-between align-items-center">
                        <Col lg={5}>
                            <div className="item-question">
                                <img src="./images/group-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Совместно работать с контактами</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                            <div className="item-question">
                                <img src="./images/map-pin-user-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Легко найти нужного вам человека</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                            <div className="item-question">
                                <img src="./images/draft-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Создавать заметки и делиться ими</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="item-question">
                                <img src="./images/question-answer-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Собрать все переписки в одном месте</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                            <div className="item-question">
                                <img src="./images/calendar-2-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Делиться своими планами</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                            <div className="item-question">
                                <img src="./images/group-fill.svg" className="icon" alt="icon" />
                                <div className="content">
                                    <h4>Совместно работать с контактами</h4>
                                    <p>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей Не следует, однако забывать, что постоянное информационно-пропагандистское </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <section className="section-four">
                    <Container>
                        <div className="title text-center">
                            <h3>Почему стоит выбрать ZNS?</h3>
                            <span>Посмотрите 5-минутное видео о преимуществах нашей платформы </span>
                        </div>
                        <div className="video-box">
                            <div className="control">
                            <i className="fas fa-play"></i>
                            </div>
                            <video controls={false} src=""></video>
                        </div>
                    </Container>
                </section>
            </section>
        </Fragment>
    ) 
    
}
export default Home