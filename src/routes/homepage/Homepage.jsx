import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
const Homepage = () => {
    return (
        <div className='homepage'>
        <img src='/orbital.png' alt='' className='orbital'/>
            <div className='left'>
                <h1>LAMA AI</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                    Sweet roll cotton candy donut chocolate cake.
                    Ice cream marshmallow muffin.
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className='right'></div>
        </div>
    )
}

export default Homepage