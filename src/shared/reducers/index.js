import { combineReducers } from 'redux';

import pageReducer from './pageReducer';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  page: pageReducer,
  games: gameReducer
});

export default reducers;
