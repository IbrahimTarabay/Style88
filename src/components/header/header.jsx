import React from 'react';
import {Link} from 'react-router-dom';
import style88 from '../../assets/style88.png';
import './header.scss';

const Header = () =>(
    <div className='header'>
      <Link className='logo-container' to="/">
      <img alt="style88" src={style88} style={{ height:100, width: 110 }} />
      </Link>
      <div className='options'>
          <Link className='option' to='/shop'>
              SHOP
          </Link>
          <Link className='option' to='/shop'>
              CONTACT
          </Link>
        </div>
      </div>
)

export default Header;