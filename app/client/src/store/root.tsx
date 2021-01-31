import { createStore, combineReducers } from 'redux'
import {
  GradientReducer as Gradient
} from './Gradient';

const reducers = combineReducers({
  Gradient
});

const store = createStore(reducers);

export default store;


