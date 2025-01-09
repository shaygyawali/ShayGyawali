import logo from './logo.svg';
import './App.css';
import './CardComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';





function CardComponent(props) {
  return (
    <div className = "cardHolder">
      <div className = "imgHolder">
        <img className="mocks" src={props.img}></img>
      </div>
      <div className = "textHolder"> 
        <p className = "title" style={{display: 'inline-block', fontFamily: '"Source Code Pro", monospace', fontWeight: '700'}} > {props.title}</p>
        <TypeAnimation
        sequence={[
          `${props.tool1} -`, 
          1000, 
          `${props.tool1} - ${props.tool2} -`,
          1000,
          `${props.tool1} - ${props.tool2} - ${props.tool3}`,
          1000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        className = "text"
        speed={30}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{display: 'inline-block', fontFamily: '"Source Code Pro", monospace', fontWeight: '500'}}
      />

      <p className = "desc" style={{display: 'inline-block', fontFamily: '"Source Code Pro", monospace', fontWeight: '300', paddingTop: '20px'}} > {props.desc} </p>
      <Button
        className = "actionBtn"
        href={props.site}
        title="Learn More"
        color="#000000"
        accessibilityLabel="Learn more about this purple button"
      > {props.action} </Button>

      </div>
    </div>
  );
}

export default CardComponent;
