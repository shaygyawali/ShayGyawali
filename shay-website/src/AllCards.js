import logo from './logo.svg';
import './App.css';
import './AllCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-scroll';
import lmaoo from './lmaoo.png'
import timey from './timey.png'
import sp0t from './sp0t.png'
import bffr from './bffr.png'






function AllCards() {
  return (
    
    <div className = "cardsHolder" id="cards">
        <CardComponent img = {lmaoo} title = "LMAOO" text="Request your friends' reactions to videos" action = "LMAOO Website" >
        </CardComponent>
        <CardComponent img = {timey} title = "TIMEY" text="Smart timer that holds you accountable" action = "Timey.me">
        </CardComponent>
        <CardComponent img = {bffr} title = "BFFR" text="BeReal, for music (in the works)" action = "BFFR sample feed">
        </CardComponent>
        <CardComponent img = {sp0t} title = "sp0t" text="Location based social media" action = "sp0t app">
        </CardComponent>
    </div>
  );
}

export default AllCards;