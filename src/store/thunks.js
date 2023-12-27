import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from './actions';

const apiUrl1 = 'http://localhost:3333/categories/all'; // Замените на свой URL API
const apiUrl2 = 'http://localhost:3333/products/all'; // Замените на свой URL API


const fetchDataFromApi = async (dispatch, apiUrl, api) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(fetchDataSuccess(api, data));
  } catch (error) {
    dispatch(fetchDataFailure(api, error.message || 'Ошибка при получении данных'));
  }
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    // Запрашиваем данные из первого API
    await fetchDataFromApi(dispatch, apiUrl1, 'data1');

    // Запрашиваем данные из второго API
    await fetchDataFromApi(dispatch, apiUrl2, 'data2');
  };
};
