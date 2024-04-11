import React from 'react'
import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/add-city'>Add city</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent
