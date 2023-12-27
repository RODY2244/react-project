// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (api, data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { api, data },
});

export const fetchDataFailure = (api, error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { api, error },
});


export const addToOrders = (product) => {
  return {
    type: 'ADD_TO_ORDERS',
    payload: product,
  };
};