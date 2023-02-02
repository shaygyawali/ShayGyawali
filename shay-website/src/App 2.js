import logo from './logo.svg';
import './App.css';
import CustomNav from './CustomNav'
import CardComponent from './CardComponent'
import AllCards from './AllCards';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import pointer from './pointer.png'; // Tell webpack this JS file uses this image
import {Link} from 'react-scroll'




function App() {
  return (
  <div className="App">
    <CustomNav></CustomNav>

    <div className ="hero">
      <p className="title"> Hi! I'm Shay, a <mark>Student.</mark></p> 
      <p className="subTitle">As lover of innovative tech, I’ve been applying my skills by building, breaking, and learning: </p>
      <Link  className = "arrowGrow" to="cards" spy={true} smooth={false}>    
        <svg color = "black">
          <defs>
            <marker id="m" markerWidth="4" markerHeight="8" 
            refX="0" refY="1" viewBox="0 0 1 2">
              <polygon points="0,0 1,1 0,2" fill="grey"/>
            </marker>
          </defs>
          <line x1="50%" y1="50%" x2="100%" y2="50%" 
          stroke-width="2" marker-end="url(#m)" stroke="grey"/>
        </svg>
        </Link>
    </div>
       
    <AllCards className="all"></AllCards>

    <footer className="footer"> 
      <p>
        Built using React.js and React Bootstrap
      </p>
    </footer>
  </div>

  );
}

export default App;
