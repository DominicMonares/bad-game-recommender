import { combineReducers } from 'redux';

import pageReducer from './pageReducer';
import gamesReducer from './gamesReducer';

const reducers = combineReducers({
  page: pageReducer,
  games: gamesReducer
});

export default reducers;
