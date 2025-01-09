import logo from './logo.svg';
import './App.css';
import CustomNav from './CustomNav'
import AllCards from './AllCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll'
import Headshot from './headshot.png'
import { TypeAnimation } from 'react-type-animation';
import '@fontsource/source-code-pro/400.css'; 
import '@fontsource/source-code-pro/700.css'; 







function App() {
  return (
  <div className="App">
    <CustomNav></CustomNav>

    <div className ="hero">
      <img src={Headshot} height={200} width={200} className='headshot'></img>
      <p style={{ fontSize: '1em', fontFamily: '"Source Code Pro", monospace'}}> Hi! I'm Shay 👩🏽‍💻, an engineer with a strong focus on product design and a passion for creating measurable, impactful solutions. </p>
      <TypeAnimation
      sequence={[
        'I\'m currently building', 
        3000, 
        'I\'m currently learning',
        3000,
        'I\'m currently interviewing',
        500,
        'I\'m currently interviewing 👀',
        3000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      speed={30}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block', fontFamily: '"Source Code Pro", monospace', fontWeight: '700'}}
    />
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
