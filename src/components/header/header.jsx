import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import style88 from '../../assets/style88.png';
import './header.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) =>(
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
          {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
          }
        </div>
      </div>
)

const mapStateToProps = state =>({
  /*we can name this function anything but this the standard, state here indication for roort state*/
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);