import logo from './logo.svg';
import './CustomNav.css';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomNav() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">Shay Gyawali</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Shay Gyawali
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="mailto:shaygyawali1@gmail.com">Contact</Nav.Link>
                  <Nav.Link href="hhttps://drive.google.com/file/d/1JrhqlqGTdkoWV9iFRBnooHlRElh4-K-Y/view?usp=sharing">Resume</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CustomNav;
