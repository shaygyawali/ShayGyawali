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
        <CardComponent img = {lmaoo} title = "LMAOO" text="Request your friends' reactions to videos" action = "LMAOO Website" site="https://lmaoo.wtf" desc="Built LMAOO's front-end using SwiftUI and implemented share feature using Firebase DynamicLinks">
        </CardComponent>
        <CardComponent img = {timey} title = "TIMEY" text="Smart timer that holds you accountable" action = "Timey.me" site="https://timey.me" desc="Front-end made with React.js, designed with Figma">
        </CardComponent>
        <CardComponent img = {sp0t} title = "sp0t" text="Location based social media" action = "sp0t app" site="https://timey.me" desc="Helped build sp0t's notification, find friends, and onboarding page using Swift. Currently working on share post feature using Firebase Dynamic Links">
        </CardComponent>
        <CardComponent img = {bffr} title = "BFFR" text="BeReal, for music" action = "BFFR sample feed" desc="Currently in the works. Designing and building BFFR's interface using Figma and MERN stack. After running using READ.ME instructions, use any dummy data to log in and view sample feed">
        </CardComponent>
        <div class="foot"></div>
    </div>
  );
}

export default AllCards;