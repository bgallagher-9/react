import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from './App';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/common/header';
import Courses from './components/course/course';

class Routing extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/courses" component={Courses} />
            </div>
        </div>
      </Router>
    );
  }
}

export default Routing;
