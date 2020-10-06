import React from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contacts/Contact";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
