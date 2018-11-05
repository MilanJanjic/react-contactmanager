import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/pages/Test';
import EditContact from './components/contacts/EditContact';
//import AddContactref from './components/contacts/AddContactref';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header branding ="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;