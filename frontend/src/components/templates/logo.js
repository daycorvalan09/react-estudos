import './logo.css'
import React from 'react'
import Logo from '../../assets/logo.PNG'
import {Link} from 'react-router-dom'


export default props =>

<aside className='logo'>

<Link to="/" className="logo">
    <img src={Logo} alt="logo"/>
</Link>

</aside>