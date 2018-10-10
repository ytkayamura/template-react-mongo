export const ActionTypes = {
  HELLO: 'HELLO',
};
export const Actions = {
  hello: (hello) => ({
    type: ActionTypes.HELLO,
    hello,
  }),
};

