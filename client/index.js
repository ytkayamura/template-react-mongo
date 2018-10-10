import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { ActionTypes } from './actions';
import reducer from './reducer';

const initialState = { hello: 'Hello!' };
const store = createStore(
  reducer,
  initialState,
);
render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);
