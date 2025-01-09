import logo from './logo.svg';
import './App.css';
import './CardComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function CardComponent(props) {
  return (
    <Card style={{ width: '80%', backgroundColor: '#FFFFFF' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title className="t1">{props.title}</Card.Title>
        <Card.Text className="t2">
          {props.text}
        </Card.Text>
        <Card.Text className="t3">
          {props.desc}
        </Card.Text>
        <Button className="btn"
        href={props.site} variant="primary">{props.action} </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
