// reducers.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './actions';

const initialState = {
  data1: [],
  data2: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      const { api, data } = action.payload;
      return {
        ...state,
        loading: false,
        [api]: data,
      };

    case FETCH_DATA_FAILURE:
      const { api: errorApi, error } = action.payload;
      return {
        ...state,
        loading: false,
        error: { [errorApi]: error },
      };

    default:
      return state;
  }
};





export default dataReducer;
