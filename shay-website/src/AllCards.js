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
import bgch from './bgch.png'
import moneyhub from './moneyhub.png'






function AllCards() {
  return (
    
    <div className = "cardsHolder" id="cards">
        <CardComponent img = {moneyhub} title = "MoneyHub Sessions: AI Learning Analytics" tool1="Next.js" tool2="MongoDB" tool3="OpenAI" action = "Visit MoneyHub Sessions" site="https://moneyhub-ai-integrated-one.vercel.app/" desc="Designed, architected, developed MoneyHub Sessions, a platform where educators can choose lessons, students scan for pre and post quizzes, and teachers gain AI-powered learning insights.">
        </CardComponent>
        <CardComponent img = {bgch} title = "Boys and Girls Club of Harlem" tool1="Wordpress" tool2="HTML/CSS" tool3="Javascript" action = "Visit Harlembgc.org" site="https://harlembgc.org" desc="Performed a complete overhaul of website, from design to development. Currently managing BGCH's web presence, including website, donation platform, and newsletter marketing">
        </CardComponent>
        <CardComponent img = {sp0t} title = "sp0t: Location Based Social Media" tool1="SwiftUI" tool2="UIKit" tool3="Firebase" action = "Try sp0t" site="https://apps.apple.com/us/app/sp0t/id1477764252" desc="As a SWE intern, I built sp0t's notification, find friends, and onboarding features.">
        </CardComponent>
        <CardComponent img = {lmaoo} title = "LMAOO: Blind Reactions to Shared Media" tool1="UIKit" tool2="Snap SDK" tool3="Firebase" action = "LMAOO Website" site="https://lmaoo.wtf" desc="Built LMAOO's front-end interface and implemented share feature using Snap SDK and Firebase DynamicLinks">
        </CardComponent>
        <CardComponent img = {timey} title = "TIMEY: Face Detection Smart Timer" tool1="MERN Stack" tool2="Figma" tool3="Flask" action = "Timey.me" site="https://timey.me" desc="Front-end made with React.js, designed with Figma">
        </CardComponent>
        <div class="foot"></div>
    </div>
  );
}

export default AllCards;