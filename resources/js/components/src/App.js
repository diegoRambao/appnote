import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Content from './components/Content'
import './css/App.css'

const App = () => {
    return(
        <Fragment>
            <div className="p-5">
                <div className="row">
                    <div className="col-md-2 center">
                        <Navbar />
                    </div>
                    <div className="col-md-10">
                        <Search />
                        <Content />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default App