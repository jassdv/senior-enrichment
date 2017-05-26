import React from 'react';
import { Link } from 'react-router';

//a component that displays the navbar
const Navbar = (props) =>{
    return(
        <ul className="nav-list">
            <li className="nav-link"><Link to="/home">Home</Link></li>
            <li className="nav-link"><Link to="/students">Students</Link></li>

        </ul>

    );

};

export default Navbar;



