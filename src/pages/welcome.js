import React from 'react';
import myName from '../imgs/myName.png';
import { connect } from 'dva';

class _Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={myName} />
        <div>
          GitHub:
          <a href={'https://github.com/AsterRdh'}>
            https://github.com/AsterRdh
          </a>
          <br />
          bilibili:
          <a href={'https://space.bilibili.com/24029993'}>
            https://space.bilibili.com/24029993
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
const Welcome = connect(mapStateToProps)(_Welcome);

export default Welcome;
