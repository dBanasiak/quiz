import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainNav from './components/mainNav/MainNav';
import IntroView from './views/intro-view/IntroView';
import MainView from './views/main-view/MainView';

function App() {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route path='/game' exact>
          <MainView />
        </Route>
        <Route path='/' exact>
          <IntroView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
