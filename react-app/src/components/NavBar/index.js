import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import "./NavBar.css";
import { getQuizzes } from '../../store/quiz'
import { getCategories } from '../../store/category';


import logo from "../../logo/brain.jpg"

const NavBar = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getQuizzes());
    dispatch(getCategories());
  }, [dispatch])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div nav-bar__container>
      <ul className="nav-bar">
        <li classname="logo-container">
          <NavLink exact to="/" className="logo-image">
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