
import './Nav.css';
import IMG from '../../asetss/loogo3.png';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import 'react-loading-skeleton/dist/skeleton.css'
import { Link} from 'react-router-dom';


const Navs = () => {
 
  return (
    <div className='nav__container'>
    <Navbar collapseOnSelect expand="lg" bg=" rgb(78, 78, 78)" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={IMG} alt="" width={70}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav__container-links" >
            <Nav.Link href="#features">javascript </Nav.Link>
            <Nav.Link href="#About">About us</Nav.Link>
            <Nav.Link href="#">Ask Coding </Nav.Link>
          </Nav>
          <Nav>
            
            <div className='nav__container-links_signup'>
            <Link to="/signup"> <button> Sign up</button></Link>
        </div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navs