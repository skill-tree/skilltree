import { 
  TOGGLE_FLAG 
} from '../../action-types';

export const flagReducer = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case (TOGGLE_FLAG):
      return !state;
    default: 
      return state;
  }
};