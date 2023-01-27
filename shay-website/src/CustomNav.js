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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                    title="Work"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"> LMAOO </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Timey
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Github
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">Contact</Nav.Link>
                  <Nav.Link href="#action2">Resume</Nav.Link>
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
