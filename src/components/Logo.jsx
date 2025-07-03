import React from 'react'
import Sun from '../assets/Sun.png'
function Logo({width = '100px'}) {
    return (
        <div><img src={Sun} alt="logo" width={width} /></div>
    )
}

export default Logo
