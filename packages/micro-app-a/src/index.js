import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMicroAppA = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountMicroAppA = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};