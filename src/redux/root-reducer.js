import { combineReducers } from 'redux';

import { flagReducer } from './reducers/flag-reducer';
import { dataReducer } from './reducers/data-reducer';

const rootReducer = combineReducers({
  flag: flagReducer,
  data: dataReducer
});

export default rootReducer;