import React , { Fragment } from "react";
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
                </section>
        </Fragment>
    ) 
    
}
export default Home