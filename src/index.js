import React from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/Index/Index';

// TODO responsive
import '../src/styles.css'

class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);