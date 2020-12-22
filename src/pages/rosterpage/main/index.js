import routes from './router';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../list';
import Card from '../card';
import ProLayout from '@ant-design/pro-layout';
import { history } from 'umi';
import { Link } from 'umi';
const Topics = ({ match }) => {
  return (
    <div>
      <h3>我是列表</h3>
      <ul>
        <li>
          <Link to={`${match.url}/index`}>a</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.url}/:topicId`} component={Topic} />
    </div>
  );
};
const Topic = ({ match }) => {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
};

class RosterMain extends Component {

  render() {
    return (
      <div>
        <Router>
          <Link to={"/staffroster/roster/card"}>123</Link>
          <Switch>
            {/*<Route path="/"  component={() => <Card/>}></Route>*/}
            <Route
              path="/"
              component={() => (
                <List name={this.props.name} history={history} />
              )}
            ></Route>
            {/*<Route path="/" component={Topics}></Route>*/}
            <Route
              path="/list"
              component={() => (
                <List name={this.props.name} history={history} />
              )}
            ></Route>
            <Route path="/card" component={Card}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default RosterMain;
