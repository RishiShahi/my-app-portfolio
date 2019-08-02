import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import NoMatch from './NoMatch';
import ContactPage from './ContactPage';
import Layout from './components/Layout';
import Header from './Header';


class App extends Component { 
  render() {
    return (
      <React.Fragment> 
        <Layout>
          <Router>
            <Header />
            <Switch>
              <Route path="/" component={HomePage} exact={true} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
