import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import "./NavBar.css";
import { getQuizzes } from '../../store/quiz'
import { getCategories } from '../../store/category';
import * as sessionActions from "../../store/session";

import logo from "../../logo/brain.jpg"

const NavBar = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
 
  const style = {
    background: 'linear-gradient(0deg, rgba(161,91,226,0.8793625356125356) 0%, rgba(40,27,255,1) 100%)',
    border: 0,
    color: 'white',
    height: '100px',
    padding: '0 30px',
  };

  const email = "demo@aa.io";
  const password = "password";

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ email, password }))
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getQuizzes())
  }, [dispatch])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button style={style} onClick={handleClick}>Demo Login</button>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div nav-bar__container>
      <ul className="nav-bar">
        <li className="logo-container">
          <NavLink exact to={ sessionUser ? '/profile': '/' } className="logo-image">
            <img alt="" src={logo} id="logo"></img>
          </NavLink>
        </li>
        <li id="title">
          <h1>BrainBust</h1>
        </li>
        <li>{isLoaded && sessionLinks}</li>
      </ul>
    </div>
  );
}

export default NavBar;
