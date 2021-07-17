import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MicroApplication from './MicroApplication';
import About from './components/About';

const {
  REACT_APP_A_HOST: microAppAHost,
  REACT_APP_B_HOST: microAppBHost,
} = process.env;

const MicroAppA = ({ history }) => (
  <MicroApplication history={history} host={microAppAHost} name="MicroAppA" />
);
const MicroAppB = ({ history }) => (
  <MicroApplication history={history} host={microAppBHost} name="MicroAppB" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={MicroAppA} />
        <Route exact path="/app-a/:id" component={MicroAppA} />
        <Route exact path="/app-b" render={MicroAppB} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;