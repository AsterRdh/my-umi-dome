import routes from './router';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import List from "../list";
import Card from "../card";


class RosterMain extends Component {

  render() {
    return(
      <div>
        <Router>
          <Link to="/staffroster/home/roster/card">card</Link>
          <Switch>
            <Route path="/" component={() => <List name={this.props.name} history={history}/>}></Route>
            <Route path="/list" component={() => <List name={this.props.name} history={history}/>}></Route>
            <Route path="/card" component={() => <Card/>}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default RosterMain;
