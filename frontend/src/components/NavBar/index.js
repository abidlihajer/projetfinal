import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtn,NavBtnLink } from './NavbarElements';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout } from "../../redux/authSlice";
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const auth=useSelector(state=>state.auth.auth)
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src={require('../../images/logo.png')} alt='logo' width='150px'/>
          </NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="ourprinciples">Our Principles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
          </NavMenu>
          {
            auth ? <>
          
         <Button  variant="outline-primary m-2" onClick={handleLogout}>Logout</Button> 
          
          <NavBtn>
          <NavBtnLink to='/profile'>Profile</NavBtnLink>
          </NavBtn> </> :<>
            <NavBtn>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
          </>          }

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar