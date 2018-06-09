import { combineReducers } from 'redux';

import { flagReducer } from './reducers/flag-reducer';

const rootReducer = combineReducers({
  flag: flagReducer
});

export default rootReducer;