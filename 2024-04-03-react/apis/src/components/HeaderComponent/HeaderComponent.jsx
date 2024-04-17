import React from 'react'
import {NavLink} from "react-router-dom";
import './HeaderComponent.css'
const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Jokes</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/ai'>Ai</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent
