import { ActionTypes } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.HELLO:
      return {
        ...state,
        hello: action.hello,
      };
    default:
      return state;
  }
};
export default reducer;
