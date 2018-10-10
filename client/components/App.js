import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions as act } from '../actions';

class App extends Component {
  onClick = async () => {
    const { hello, dispatch } = this.props;
    try {
      const res = await axios.post('/api/hello', { hello });
      dispatch(act.hello(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { hello } = this.props;
    return (
      <div>
        {hello}<br/>
        <button type="button" onClick={this.onClick}>Hello!</button>
      </div>
    );
  }
}
export default connect(state => ({ hello: state.hello }))(App);
