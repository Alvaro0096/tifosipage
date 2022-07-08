import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link class="nav-link" to='/'>
                    Main
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to='/card'>
                    Card
                </Link>
            </li>
        </ul>
    </>
  )
}

export default Header