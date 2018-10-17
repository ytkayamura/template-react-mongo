export const ActionTypes = {
  HELLO: 'HELLO',
  LAST_PUSHED_DATE: 'LAST_PUSHED_DATE',
};
export const Actions = {
  hello: (hello) => ({
    type: ActionTypes.HELLO,
    hello,
  }),
  lastPushedDate: (lastPushedDate) => ({
    type: ActionTypes.LAST_PUSHED_DATE,
    lastPushedDate,
  }),
};

