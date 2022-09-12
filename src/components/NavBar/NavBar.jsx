import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "../CartWidget/CartWidget";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container className="navbar-container">
        <Link to="/" className="navbar-text">Todo Boedo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="navbar-center">
            <Link to="/productos/camisetas" className="navbar-text">Camisetas</Link>
            <Link to="/productos/pantalones" className="navbar-text">Pantalones</Link>
            <Link to="/productos/buzos" className="navbar-text">Buzos</Link>
            <Link to="/productos/accesorios" className="navbar-text">Accesorios</Link>
          </Nav>
          <Nav>
            <Link to="/carrito">
              <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

