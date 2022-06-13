import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

const store = createStore(
  reducers,
  {page: 1, games: []},
  applyMiddleware(thunk)
)

export default store;
