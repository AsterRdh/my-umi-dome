import { Input, Tooltip } from 'antd';
import React from 'react';

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

export default class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = e => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({ value: value });
    }
  };

  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        maxLength={25}
        value={this.state.value}
      />
    );
  }
}
