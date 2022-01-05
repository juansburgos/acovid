import { Navbar, Container } from 'react-bootstrap';
import logo from '../logo.png'

const Home = () => {
    return(
        <Navbar sticky="top" bg="dark" variant="dark" className="My-navbar">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  id="Img-navbar"
                />
              Aco Beats
              </Navbar.Brand>
        </Navbar>
    )
}
export default Home
