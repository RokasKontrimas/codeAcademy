import React from 'react'
import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Cities</NavLink></li>
                    <li><NavLink to='/cars'>Cars</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent
