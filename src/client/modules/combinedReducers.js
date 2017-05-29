import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// import reducers
import home from './home/reducer';

const reducersCombined = combineReducers({
  home,
  routing
});

export default reducersCombined;
