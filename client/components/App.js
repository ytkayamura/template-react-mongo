import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions as act } from '../actions';

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    try {
      const res= await axios.get('/api/pushed');
      dispatch(act.lastPushedDate(res.data));
    } catch(e) {
      console.error(e);
    }
  }

  onClickHello = async () => {
    const { hello, dispatch } = this.props;
    try {
      const res = await axios.post('/api/hello', { hello });
      dispatch(act.hello(res.data));
    } catch (err) {
      console.log(err);
    }
  }
  onClickPush = async () => {
    const { dispatch } = this.props;
    try {
      const res = await axios.post('/api/push');
      dispatch(act.lastPushedDate(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { hello, lastPushedDate } = this.props;
    return (
      <div>
        {hello}<br/>
        <button type="button" onClick={this.onClickHello}>Hello!</button><br/><br/>
        Pushed at {lastPushedDate}<br/>
        <button type="button" onClick={this.onClickPush}>Push!</button>
      </div>
    );
  }
}
export default connect(state => ({
  hello: state.hello,
  lastPushedDate: state.lastPushedDate,
}))(App);
