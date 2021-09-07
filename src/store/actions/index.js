import { createCounterApi, incrementCounterApi, resetCounterApi } from '../../api';
import { INCREMENT_COUNTER, CREATE_COUNTER, RESET_COUNTER } from './action-types';

const baseURL = 'http://localhost:8090/counter'
const create = 'create';

export const createCounter = () => async dispatch => {
  const data = await createCounterApi(baseURL, create);
  console.log('action payload', data);
  dispatch({
    type: CREATE_COUNTER,
    payload: data,
  });
};

export const resetMyCounter = id => async dispatch => {
  const data = await resetCounterApi(baseURL, id);
  dispatch({
    type: RESET_COUNTER,
    payload: data,
  });
};

export const incrementCounter = (id) => async dispatch => {
  const data = await incrementCounterApi(baseURL, id);
  dispatch({
    type: INCREMENT_COUNTER,
    payload: data,
  });
};
