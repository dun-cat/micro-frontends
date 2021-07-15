import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMicroAppB = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountMicroAppB = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};