import React from 'react'
import { Link } from 'react-router-dom'
import LoginHome from './loginButton'
import '../style/Navbar.css'
import AddButton from '../component/addButton'
import DonateButton from '../component/donateButton'

function Nav(props) {
    console.log(props.showLogin);
    
    return (
        <div id="header">
            <span>BOOKS</span>
            <LoginHome showLogin={props.showLogin} showRegis={props.showRegis}/>
            <AddButton kartolo={props.kartolo} />
            <DonateButton openLittle={props.openDonate}/>
        </div>
    )
}

export default Nav