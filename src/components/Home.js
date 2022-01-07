import { Navbar, Container, NavDropdown, Nav, Offcanvas, Button } from 'react-bootstrap';
import logo from '../logo.png';
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" expand={false} className="My-navbar">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  id="Img-navbar"
                />
                <span className="brandTitle">Aco Beats</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  >
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Link to="/home" className="nav-link">Home</Link>
                      <Link to="/" className="nav-link">Landing</Link>
                      <Link to="/" className="nav-link">Long Link for testing</Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
}
export default Home
