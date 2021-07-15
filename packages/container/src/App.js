import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import MicroApplication from './MicroApplication';
import About from './components/About';

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

let numRestaurants = 0;
fetch(`${process.env.REACT_APP_CONTENT_HOST}/restaurants.json`)
  .then(res => res.json())
  .then(restaurants => {
    numRestaurants = restaurants.length;
  });

const getRandomRestaurantId = () =>
  Math.floor(Math.random() * numRestaurants) + 1;

const MicroAppA = ({ history }) => (
  <MicroApplication history={history} host={browseHost} name="micro-app-a" />
);
const MicroAppB = ({ history }) => (
  <MicroApplication history={history} host={restaurantHost} name="micro-app-b" />
);
const Random = () => <Redirect to={`/restaurant/${getRandomRestaurantId()}`} />;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={MicroAppA} />
        <Route exact path="/app-a/:id" component={MicroAppB} />
        <Route exact path="/app-b" render={Random} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;