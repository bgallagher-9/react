import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
// import Header from './components/common/header';
// import Home from './components/home/home';
// import About from './components/about/about';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="container-fluid">
            <Routing />
          </div>
        </Router>
      </Provider>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isrequired
// };

export default App;
