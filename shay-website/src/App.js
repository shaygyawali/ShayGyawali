import logo from './logo.svg';
import './App.css';
import CustomNav from './CustomNav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import pointer from './pointer.png'; // Tell webpack this JS file uses this image



function App() {
  return (
  <div className="App">
    <CustomNav></CustomNav>
    <div className ="hero">
    <p className="title"> Hi! I'm Shay, a Student.</p> 
    <p className="subTitle">As a quick, dedicated learner and lover of innovative tech, I’ve been applying my skills _________: </p>
    <img className="downPointer" src={pointer} alt="pointer" />
  
    </div>   
  </div>
  );
}

export default App;
