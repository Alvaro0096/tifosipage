import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link" to='/'>
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/form'>
                    Form
                </Link>
            </li>
        </ul>
    </>
  )
}

export default Header