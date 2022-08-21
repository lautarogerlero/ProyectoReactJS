import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-logo">Todo Boedo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="navbar-center">
            <Nav.Link href="#camisetas" className="navbar-text">Camisetas</Nav.Link>
            <Nav.Link href="#pantalones" className="navbar-text">Pantalones</Nav.Link>
            <Nav.Link href="#buzos" className="navbar-text">Buzos</Nav.Link>
            <Nav.Link href="#accesorios" className="navbar-text">Accesorios</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget numeroCarrito={1}></CartWidget>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;