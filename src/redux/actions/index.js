import axios from 'axios';
import { 
  TOGGLE_FLAG,
  GET_DATA
} from '../action-types';

export const toggleFlag = () => {
  return {
    type: TOGGLE_FLAG
  };
};

export const getData = () => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(({ data }) => {
        dispatch({
          type: GET_DATA,
          payload: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
