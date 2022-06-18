import React , { Fragment } from "react";
import { Navbar ,Header } from '../../components'
function Home() {
    return (
        <Fragment>
            <header  className="head-page">
                <div className="px-4">
                    <Navbar />
                </div>
                <Header />
            </header>
        </Fragment>
    ) 
    
}
export default Home