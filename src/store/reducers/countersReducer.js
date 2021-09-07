import {
  CREATE_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../actions/action-types';

const INITIAL_STATE = {
  counter: {},
};

const countersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CREATE_COUNTER:
      return {
        counter: payload,
      }
    case INCREMENT_COUNTER:
      return {
        counter: payload,
      };
    case RESET_COUNTER:
      return {
        counter: payload,
      }
    default:
      return state;
  }
}

export default countersReducer;