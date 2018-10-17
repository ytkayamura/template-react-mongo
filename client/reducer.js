import { ActionTypes } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.HELLO:
      return {
        ...state,
        hello: action.hello,
      };
    case ActionTypes.LAST_PUSHED_DATE:
      return {
        ...state,
        lastPushedDate: action.lastPushedDate,
      };
    default:
      return state;
  }
};
export default reducer;
