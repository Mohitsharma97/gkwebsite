import React,{useState} from 'react';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import InteriorPage from './pages/InteriorPage'
import{Route,Switch} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import Advertise from './pages/Advertise';
function App() {
  
return(<>
<Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/:category" component={CategoryPage}/>
  <Route exact path="/cat/Interior" component={InteriorPage}/>
  <Route exact path="/about/Career" component={CareerPage}/>
  <Route exact path="/page/aboutCompany" component={AboutPage}/>
  <Route exact path="/page/feedback" component={FeedbackPage}/>
  <Route exact path="/page/ContactUs" component={ContactPage}/>
  <Route exact path="/page/advertise" component={Advertise}/>
</Switch>
</>)
}

export default App;
