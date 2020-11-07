import { SHOW_ALERT, HIDE_ALERT } from '../types';

export const AlertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
// код ниже оптимизация этого редюсера

/* const handlers = {
    [SHOW_ALERT]: (state, action) => ({...state, alert: action.payload}),
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}
export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
} */
// хотя, по мне, первый проще
