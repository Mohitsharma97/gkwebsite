import React,{useState} from 'react';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import InteriorPage from './pages/InteriorPage'
import{Route,Switch} from 'react-router-dom';

function App() {
  
return(<>
<Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/:category" component={CategoryPage}/>
  <Route exact path="/cat/Interior" component={InteriorPage}/>
</Switch>
</>)
}

export default App;
