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
                                    <img className="icon" src="./images/user1.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/LinkedIN.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/user3.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/user2.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Telegram.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/user4.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/INST.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Skype.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/user5.jfif" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/Outlook.svg" alt="image" />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img className="icon" src="./images/user6.jfif" alt="image" />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </section>
        </Fragment>
    ) 
    
}
export default Home