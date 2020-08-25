import React, { Fragment } from 'react'
import './../css/Content.css'
import Card from '../components/Card'

const Content = () => {
    return(
        <Fragment>
            <h1 className="title-content mt-3">Notes</h1>
            <div className="content-card mt-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Fragment>
    )
}

export default Content