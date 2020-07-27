import React from 'react'
import Nav from './nav/home'
import './styles.less'
import Home from './home/home'
const index = () => {
    return (
        <div>
            <div className='home-contiar'>
                <Nav></Nav>
                <Home></Home>
            </div>
        </div>
    )
}


export default index
