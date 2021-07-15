import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Desc from './components/Desc';

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/restaurants.json`)
      .then(result => result.json())
      .then(restaurants => { })
      .catch(() => {
        // this.setState({ loading: false, error: true });
      });
  }

  render() {
    return (
      <Router history={this.props.history || defaultHistory}>
        <Desc />
      </Router>
    );
  }
}

export default App;