import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyNavbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Link to="/" className="navbar-brand">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end flex-grow-1">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/cart">Cart - {cart.length}</Link>
            <Link className="nav-link" to="/">Products</Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">UI/UX</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Front-End Developer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Back-End Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Copywriting
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
