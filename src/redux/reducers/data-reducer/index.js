import { 
  GET_DATA 
} from '../../action-types';

export const dataReducer = (state = {}, action) => {
  const data = Object.assign({}, action.payload);

  switch (action.type) {
    case (GET_DATA):
      return data;
    default:
      return state;
  }
}