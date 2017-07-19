import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';
// import Header from './components/common/header';
// import Home from './components/home/home';
// import About from './components/about/about';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Routing />
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isrequired
// };

export default App;
