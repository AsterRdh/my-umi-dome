import routes from './router';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../list';
import Card from '../card';
import ProLayout from '@ant-design/pro-layout';
import { history } from 'umi';
import { Link } from 'umi';

class RosterMain extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default RosterMain;
